#!/usr/bin/env python3
"""
Babson AI brief — local editor server.

Usage:
    python3 editor.py [--port 8765]

Then open http://localhost:8765/editor in your browser. The editor reads the
data-edit-key attributes on the live HTML pages, shows them as textareas,
saves edits back to the files, and (optionally) commits + pushes to GitHub
so GitHub Pages rebuilds the live site.
"""
import json
import re
import subprocess
import sys
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
EDITABLE_FILES = ['index.html', 'why.html', 'cost.html', 'peers.html']

# Matches: <tag ... data-edit-key="KEY" ...>INNER</tag>
# `\w+` for the tag name; `(?P<inner>.*?)` is non-greedy so it matches up to
# the first matching closing tag. None of our edit-keyed elements nest the
# same tag inside themselves, so this is safe.
EDIT_RE = re.compile(
    r'<(?P<tag>\w+)(?P<attrs>[^>]*?\bdata-edit-key="(?P<key>[^"]+)"[^>]*?)>'
    r'(?P<inner>.*?)'
    r'</(?P=tag)>',
    re.DOTALL,
)


def extract_content():
    """Return {key: {file, tag, html}} for every data-edit-key block."""
    content = {}
    for filename in EDITABLE_FILES:
        path = ROOT / filename
        if not path.exists():
            continue
        html = path.read_text()
        for m in EDIT_RE.finditer(html):
            key = m.group('key')
            content[key] = {
                'file': filename,
                'tag': m.group('tag'),
                'html': m.group('inner').strip(),
            }
    return content


def save_content(updates):
    """Apply {key: new_html} updates to the files. Returns {filename: count_updated}."""
    by_file = {}
    # First, figure out which file each key lives in so we open each file once
    current = extract_content()
    for key, new_html in updates.items():
        info = current.get(key)
        if not info:
            continue
        by_file.setdefault(info['file'], []).append((key, new_html))

    counts = {}
    for filename, edits in by_file.items():
        path = ROOT / filename
        html = path.read_text()
        for key, new_html in edits:
            pattern = re.compile(
                r'(<(\w+)[^>]*?\bdata-edit-key="' + re.escape(key) + r'"[^>]*?>)'
                r'.*?'
                r'(</\2>)',
                re.DOTALL,
            )
            html, n = pattern.subn(r'\g<1>' + new_html.replace('\\', '\\\\') + r'\g<3>', html, count=1)
            if n:
                counts[filename] = counts.get(filename, 0) + n
        path.write_text(html)
    return counts


def git_publish(message=None):
    """git add -A, commit, push origin main. Returns (ok, message)."""
    if message is None:
        message = f"Content edits via editor — {datetime.now().strftime('%Y-%m-%d %H:%M')}"
    try:
        result = subprocess.run(
            ['git', 'status', '--porcelain'],
            cwd=ROOT, capture_output=True, text=True, check=True,
        )
        if not result.stdout.strip():
            return True, 'No changes to publish.'
        subprocess.run(['git', 'add', '-A'], cwd=ROOT, check=True)
        subprocess.run(['git', 'commit', '-m', message], cwd=ROOT, check=True)
        result = subprocess.run(
            ['git', 'push', 'origin', 'main'],
            cwd=ROOT, capture_output=True, text=True,
        )
        if result.returncode == 0:
            return True, 'Published. GitHub Pages will rebuild in 30–60 seconds.'
        return False, f'Push failed:\n{result.stderr.strip()}'
    except subprocess.CalledProcessError as e:
        stderr = e.stderr.decode() if isinstance(e.stderr, bytes) else (e.stderr or '')
        return False, f'Git error: {e.cmd}\n{stderr.strip()}'


MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
    '.txt':  'text/plain; charset=utf-8',
    '.md':   'text/markdown; charset=utf-8',
    '.pdf':  'application/pdf',
}


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass  # quiet

    def _send_json(self, payload, status=200):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def _serve_file(self, rel_path):
        rel = rel_path.lstrip('/') or 'index.html'
        target = (ROOT / rel).resolve()
        try:
            target.relative_to(ROOT)
        except ValueError:
            self.send_error(403)
            return
        if target.is_dir():
            target = target / 'index.html'
        if not target.exists() or not target.is_file():
            self.send_error(404)
            return
        mime = MIME.get(target.suffix.lower(), 'application/octet-stream')
        data = target.read_bytes()
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        path = urlparse(self.path).path
        if path == '/api/content':
            self._send_json({'ok': True, 'content': extract_content()})
            return
        if path == '/editor' or path == '/editor.html':
            self._serve_file('/editor.html')
            return
        self._serve_file(path)

    def do_POST(self):
        path = urlparse(self.path).path
        length = int(self.headers.get('Content-Length', '0'))
        raw = self.rfile.read(length).decode('utf-8') if length else '{}'
        try:
            body = json.loads(raw) if raw else {}
        except json.JSONDecodeError:
            self._send_json({'ok': False, 'error': 'invalid JSON'}, status=400)
            return

        if path == '/api/save':
            updates = body.get('updates', {})
            counts = save_content(updates)
            self._send_json({
                'ok': True,
                'message': f'Saved {sum(counts.values())} block(s) across {len(counts)} file(s).',
                'files': counts,
            })
            return

        if path == '/api/publish':
            updates = body.get('updates', {})
            counts = save_content(updates)
            ok, msg = git_publish(body.get('message'))
            self._send_json({
                'ok': ok,
                'message': msg,
                'files': counts,
            })
            return

        self.send_error(404)


def main():
    port = 8765
    if '--port' in sys.argv:
        port = int(sys.argv[sys.argv.index('--port') + 1])
    print()
    print('  Babson AI brief — editor server')
    print('  ' + '-' * 38)
    print(f'  Editor:   http://localhost:{port}/editor')
    print(f'  Site:     http://localhost:{port}/')
    print(f'  Project:  {ROOT}')
    print()
    print('  Ctrl-C to stop.')
    print()
    try:
        ThreadingHTTPServer(('localhost', port), Handler).serve_forever()
    except KeyboardInterrupt:
        print('\n  Stopped.\n')


if __name__ == '__main__':
    main()

/* ==========================================================================
   Intro letter + confidentiality gate. The letter is the first thing the
   reader sees; the password sits at its foot. Lightweight: not real security,
   just a "this is confidential" indicator and a context-setter.
   ========================================================================== */

(function () {
  var KEY = 'babson-ai-brief-unlocked';
  var PASSWORD = 'leadinai';

  function isUnlocked() {
    try { return localStorage.getItem(KEY) === 'yes'; }
    catch (e) { return false; }
  }

  if (isUnlocked()) return;

  // Inject styles + a hide-all-other-body-children rule, immediately.
  var style = document.createElement('style');
  style.id = 'gate-style';
  style.textContent = [
    'body > *:not(.gate-overlay) { display: none !important; }',
    '.gate-overlay {',
    '  position: fixed; inset: 0; z-index: 9999;',
    '  display: flex; align-items: flex-start; justify-content: center;',
    '  background: #FAF7F2;',
    "  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;",
    '  padding: 3vh 1.25rem 4rem;',
    '  overflow-y: auto;',
    '}',
    '.gate-card {',
    '  max-width: 640px; width: 100%; margin: 0 auto;',
    '  padding: 2rem 2rem 1.7rem;',
    '  background: #ffffff; border-radius: 8px;',
    '  border-top: 5px solid #006747;',
    '  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07);',
    '}',
    '.gate-eyebrow {',
    "  display: block; font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em;',
    '  text-transform: uppercase; color: rgba(20,25,31,0.55);',
    '  margin-bottom: 0.55rem;',
    '}',
    '.gate-title {',
    "  font-family: 'IBM Plex Sans', sans-serif;",
    '  font-size: 1.32rem; font-weight: 700; letter-spacing: -0.012em;',
    '  color: #14191F; margin: 0 0 1.2rem; line-height: 1.25;',
    '}',
    '.gate-letter {',
    "  font-family: 'IBM Plex Serif', Georgia, serif;",
    '  font-size: 1rem; line-height: 1.62; color: #14191F;',
    '}',
    '.gate-letter p { margin: 0 0 1rem; }',
    '.gate-letter p:last-of-type { margin-bottom: 1.1rem; }',
    '.gate-letter strong { color: #00563C; font-weight: 700; }',
    '.gate-letter em { font-style: italic; color: #00563C; }',
    '.gate-letter .gate-highlight {',
    '  background-color: rgba(255, 215, 60, 0.5);',
    '  padding: 0.05em 0.18em; border-radius: 1px;',
    '  font-style: normal;',
    '}',
    '.gate-callout {',
    '  border-left: 3px solid #006747;',
    '  padding: 0.25rem 0.85rem;',
    '  margin: 0.4rem 0 1.2rem !important;',
    "  font-family: 'IBM Plex Sans', sans-serif;",
    '  font-size: 0.95rem; line-height: 1.55;',
    '  background: rgba(0, 103, 71, 0.04);',
    '  border-radius: 0 4px 4px 0;',
    '}',
    '.gate-callout-eyebrow {',
    '  display: block;',
    "  font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;',
    '  text-transform: uppercase; color: #00563C;',
    '  margin-bottom: 0.25rem;',
    '}',
    '.gate-signoff {',
    '  display: flex; flex-wrap: wrap; gap: 0.5rem 1rem;',
    "  font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.78rem; font-weight: 600; color: #14191F;',
    '  letter-spacing: 0.02em;',
    '  border-top: 1px solid #E0DDD8;',
    '  padding: 0.9rem 0 0;',
    '  margin: 0 0 1.4rem;',
    '}',
    '.gate-signoff span::after { content: " ·"; color: rgba(20,25,31,0.35); margin-left: 0.5rem; }',
    '.gate-signoff span:last-child::after { content: ""; }',
    '.gate-form {',
    '  display: flex; gap: 0.5rem; align-items: stretch;',
    '  margin-bottom: 0.55rem;',
    '}',
    '.gate-pw-wrap { flex: 1; display: flex; flex-direction: column; gap: 0.3rem; }',
    '.gate-pw-label {',
    "  font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em;',
    '  text-transform: uppercase; color: rgba(20,25,31,0.6);',
    '}',
    '.gate-form input {',
    '  padding: 0.62rem 0.8rem;',
    '  font-family: inherit; font-size: 0.95rem;',
    '  border: 1px solid #E0DDD8; border-radius: 4px;',
    '  background: #FAF7F2; color: #14191F;',
    '}',
    '.gate-form input:focus {',
    '  outline: 2px solid #006747; outline-offset: 1px; background: #fff;',
    '}',
    '.gate-form button {',
    '  align-self: flex-end;',
    '  padding: 0.62rem 1.15rem;',
    '  background: #006747; color: #fff;',
    '  border: 1px solid #00563C; border-radius: 4px;',
    '  font-family: inherit; font-size: 0.92rem; font-weight: 700;',
    '  cursor: pointer; transition: background 120ms ease;',
    '}',
    '.gate-form button:hover { background: #00563C; }',
    '.gate-err {',
    "  font-family: 'IBM Plex Sans', sans-serif;",
    '  font-size: 0.86rem; color: #b35800; margin: 0 0 0.4rem; min-height: 1.2em;',
    '}',
    '.gate-confidential {',
    "  font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.68rem; letter-spacing: 0.04em;',
    '  color: rgba(20,25,31,0.5);',
    '  margin: 0;',
    '}',
    '@media (max-width: 540px) {',
    '  .gate-card { padding: 1.6rem 1.4rem 1.3rem; }',
    '  .gate-title { font-size: 1.2rem; }',
    '  .gate-form { flex-direction: column; }',
    '  .gate-form button { align-self: stretch; }',
    '}'
  ].join('\n');
  if (document.head) document.head.appendChild(style);
  else document.documentElement.insertBefore(style, document.documentElement.firstChild);

  function buildGate() {
    if (document.querySelector('.gate-overlay')) return;
    var overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML = [
      '<div class="gate-card" role="dialog" aria-labelledby="gate-title">',
      '  <span class="gate-eyebrow">Confidential briefing &middot; May 2026</span>',
      '  <h1 class="gate-title" id="gate-title">Empowering Babson&rsquo;s Entrepreneurial Leaders by Providing the Best Tools</h1>',
      '  <div class="gate-letter">',
      '    <p>Steve &mdash; thank you for the time yesterday morning. The conversation prompted us to put together this short reference brief on the three companies (OpenAI, Anthropic, Google) whose AI products are now the working tools of students at our peer institutions. We offer it in the spirit of <em>entrepreneurial leadership</em> &mdash; translating a fast-moving technology question into a tractable decision that fits ELevates&rsquo; technology-entrepreneurship pillar.</p>',
      '    <div class="gate-callout">',
      '      <span class="gate-callout-eyebrow">What this is &middot; ~10 minutes</span>',
      '      A short interactive walkthrough &mdash; four short paths covering the three providers, the cost at Babson scale, the peers who have already moved, and what Babson is already doing. Each path is two to four scenes; the sidebar tracks where you&rsquo;ve been. Take any path in any order, stop when useful, or skip straight to the closing.',
      '    </div>',
      '    <p>A practical note. Words shown with a <span class="gate-highlight">yellow highlight</span> open a short plain-language definition when you tap them &mdash; use as many or as few as helpful. The full memo-style brief is one click from the closing scene if you want to read longer; a PDF of the same is downloadable from there.</p>',
      '    <p>About the medium. This site was <em>vibe-coded</em> &mdash; built through natural-language conversation with Anthropic&rsquo;s Claude rather than written by hand in code. The underlying research drew on Google Gemini&rsquo;s Deep Research. In other words, <strong>two of the three providers we describe were the tools that produced the description.</strong> That a Babson faculty member with no engineering background can produce something like this in an afternoon is part of the point.</p>',
      '    <p>We look forward to continuing the conversation.</p>',
      '  </div>',
      '  <div class="gate-signoff">',
      '    <span>Erik Noyes</span><span>Kristi Girdarry</span><span>Jonathan Sims</span>',
      '  </div>',
      '  <form class="gate-form" id="gate-form" autocomplete="off">',
      '    <div class="gate-pw-wrap">',
      '      <label class="gate-pw-label" for="gate-pw">Password to continue</label>',
      '      <input type="password" id="gate-pw" autocomplete="new-password" autofocus />',
      '    </div>',
      '    <button type="submit">Continue &rarr;</button>',
      '  </form>',
      '  <p class="gate-err" id="gate-err" aria-live="polite"></p>',
      '  <p class="gate-confidential">For President Spinelli &middot; please do not forward without our note.</p>',
      '</div>'
    ].join('\n');
    document.body.appendChild(overlay);
    var form = document.getElementById('gate-form');
    var input = document.getElementById('gate-pw');
    var err = document.getElementById('gate-err');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = (input.value || '').toLowerCase().replace(/\s+/g, '');
      if (val === PASSWORD) {
        try { localStorage.setItem(KEY, 'yes'); } catch (e2) {}
        var s = document.getElementById('gate-style');
        if (s) s.remove();
        overlay.remove();
      } else {
        err.textContent = 'Not quite — try again.';
        input.value = '';
        input.focus();
      }
    });
    setTimeout(function () { input && input.focus(); }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildGate);
  } else {
    buildGate();
  }
})();

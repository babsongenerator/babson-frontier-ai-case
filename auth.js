/* ==========================================================================
   Lightweight client-side confidentiality gate.
   This is not real security — it's a "this is confidential" indicator that
   keeps casual link-sharers honest. Password is shared out of band.
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
    '  display: flex; align-items: center; justify-content: center;',
    '  background: #FAF7F2;',
    "  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;",
    '  padding: 2rem 1.25rem;',
    '}',
    '.gate-card {',
    '  max-width: 460px; width: 100%; text-align: left;',
    '  padding: 2.2rem 1.9rem 1.8rem;',
    '  background: #ffffff; border-radius: 8px;',
    '  border-top: 4px solid #006747;',
    '  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07);',
    '}',
    '.gate-eyebrow {',
    "  display: block; font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em;',
    '  text-transform: uppercase; color: rgba(20,25,31,0.6);',
    '  margin-bottom: 0.5rem;',
    '}',
    '.gate-title {',
    "  font-family: 'IBM Plex Sans', sans-serif;",
    '  font-size: 1.5rem; font-weight: 700; letter-spacing: -0.012em;',
    '  color: #14191F; margin: 0 0 0.9rem; line-height: 1.22;',
    '}',
    '.gate-body {',
    "  font-family: 'IBM Plex Serif', Georgia, serif;",
    '  font-size: 1rem; line-height: 1.55; color: #14191F;',
    '  margin: 0 0 1.3rem;',
    '}',
    '.gate-form { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; }',
    '.gate-form input {',
    '  flex: 1; padding: 0.62rem 0.8rem;',
    '  font-family: inherit; font-size: 0.95rem;',
    '  border: 1px solid #E0DDD8; border-radius: 4px;',
    '  background: #FAF7F2; color: #14191F;',
    '}',
    '.gate-form input:focus {',
    '  outline: 2px solid #006747; outline-offset: 1px; background: #fff;',
    '}',
    '.gate-form button {',
    '  padding: 0.62rem 1.15rem;',
    '  background: #006747; color: #fff;',
    '  border: 1px solid #00563C; border-radius: 4px;',
    '  font-family: inherit; font-size: 0.92rem; font-weight: 700;',
    '  cursor: pointer; transition: background 120ms ease;',
    '}',
    '.gate-form button:hover { background: #00563C; }',
    '.gate-err {',
    "  font-family: 'IBM Plex Sans', sans-serif;",
    '  font-size: 0.86rem; color: #b35800; margin: 0 0 1rem; min-height: 1.2em;',
    '}',
    '.gate-foot {',
    "  font-family: 'IBM Plex Mono', monospace;",
    '  font-size: 0.7rem; letter-spacing: 0.02em;',
    '  color: rgba(20,25,31,0.55);',
    '  border-top: 1px solid #E0DDD8;',
    '  padding-top: 0.85rem; margin: 1.1rem 0 0;',
    '}'
  ].join('\n');
  // Wait for <head> to exist
  if (document.head) document.head.appendChild(style);
  else document.documentElement.insertBefore(style, document.documentElement.firstChild);

  function buildGate() {
    if (document.querySelector('.gate-overlay')) return;
    var overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML = [
      '<div class="gate-card" role="dialog" aria-labelledby="gate-title" aria-describedby="gate-body">',
      '  <span class="gate-eyebrow">Confidential briefing</span>',
      '  <h1 class="gate-title" id="gate-title">Empowering Babson&rsquo;s Entrepreneurial Leaders by Providing the Best Tools</h1>',
      '  <p class="gate-body" id="gate-body">This briefing was prepared for President Stephen Spinelli. Please enter the password to continue.</p>',
      '  <form class="gate-form" id="gate-form" autocomplete="off">',
      '    <input type="password" id="gate-pw" placeholder="Password" autocomplete="new-password" autofocus />',
      '    <button type="submit">Continue</button>',
      '  </form>',
      '  <p class="gate-err" id="gate-err" aria-live="polite"></p>',
      '  <p class="gate-foot">Prepared by Erik Noyes, Kristi Girdarry, and Jonathan Sims &middot; May 2026</p>',
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

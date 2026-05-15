/* ==========================================================================
   gate.js — minimal client-side password gate.
   Password is case-insensitive ("frontier"). Unlocked state persists in
   localStorage. NOT real security: anyone with view-source can find the
   password. Intended only as a polite "please don't link this around"
   gate for casual visitors.
   ========================================================================== */

(function () {
  var STORAGE_KEY = 'babson-brief-unlocked';
  var PASSWORD    = 'frontier';

  function alreadyUnlocked() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) {
      return false; // localStorage blocked — fail open
    }
  }

  if (alreadyUnlocked()) {
    revealPage();
    return;
  }

  function revealPage() {
    document.documentElement.style.visibility = '';
    document.documentElement.style.overflow   = '';
  }

  function build() {
    var overlay = document.createElement('div');
    overlay.id = 'gate-overlay';
    overlay.innerHTML = [
      '<style>',
      '#gate-overlay{position:fixed;inset:0;background:#FAF8F4;z-index:99999;display:flex;align-items:center;justify-content:center;visibility:visible !important;}',
      '#gate-card{max-width:380px;padding:2rem 2.2rem;text-align:center;font-family:"IBM Plex Serif",Georgia,serif;color:#1A1F25;background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;box-shadow:0 18px 56px rgba(0,0,0,0.07);}',
      '#gate-eyebrow{font-family:"IBM Plex Mono",monospace;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:#5F6B75;margin-bottom:0.5rem;}',
      '#gate-card h2{font-family:"IBM Plex Sans",sans-serif;font-size:1.35rem;font-weight:700;color:#1A1F25;margin:0 0 0.5rem;}',
      '#gate-card p{color:#5F6B75;font-size:0.95rem;line-height:1.55;margin:0 0 1.25rem;}',
      '#gate-pwd{width:240px;font-size:1rem;padding:0.6rem 0.75rem;border:1px solid #d0d4d8;border-radius:4px;font-family:"IBM Plex Sans",sans-serif;}',
      '#gate-pwd:focus{outline:2px solid #006747;outline-offset:1px;border-color:#006747;}',
      '#gate-card button{margin-top:0.95rem;padding:0.6rem 1.5rem;background:#006747;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:"IBM Plex Sans",sans-serif;font-size:0.95rem;font-weight:600;}',
      '#gate-card button:hover{background:#004C33;}',
      '#gate-err{color:#9C2A1A;margin-top:0.75rem;font-size:0.88rem;font-family:"IBM Plex Sans",sans-serif;display:none;}',
      '</style>',
      '<form id="gate-card" autocomplete="off">',
        '<div id="gate-eyebrow">Confidential briefing</div>',
        '<h2>Babson AI brief</h2>',
        '<p>Please enter the password to continue.</p>',
        '<input type="password" id="gate-pwd" autocomplete="off" />',
        '<br/>',
        '<button type="submit">Enter</button>',
        '<div id="gate-err">Sorry, that password is incorrect.</div>',
      '</form>'
    ].join('');
    document.body.appendChild(overlay);
    revealPage();
    document.documentElement.style.overflow = 'hidden';

    var form = overlay.querySelector('#gate-card');
    var pwd  = overlay.querySelector('#gate-pwd');
    var err  = overlay.querySelector('#gate-err');
    pwd.focus();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if ((pwd.value || '').toLowerCase().trim() === PASSWORD) {
        try { localStorage.setItem(STORAGE_KEY, 'true'); } catch (_) {}
        overlay.remove();
        document.documentElement.style.overflow = '';
      } else {
        err.style.display = 'block';
        pwd.value = '';
        pwd.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

/* ==========================================================================
   Walkthrough — scene navigation + term modal
   ========================================================================== */

(function () {
  // ---------- inherit reader's font scale preference from the main brief ----------
  var FS_KEY = 'babson-ai-font-scale';
  var FS_CLASSES = { comfortable: 'font-comfortable', large: 'font-large', largest: 'font-largest' };
  try {
    var savedScale = localStorage.getItem(FS_KEY);
    if (savedScale && FS_CLASSES[savedScale]) {
      document.documentElement.classList.add(FS_CLASSES[savedScale]);
    } else {
      document.documentElement.classList.add(FS_CLASSES.comfortable);
    }
  } catch (e) {}

  // ---------- scene navigation ----------
  var scenes = Array.prototype.slice.call(document.querySelectorAll('.scene[data-scene]'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.lb-dot[data-go]'));
  var counter = document.getElementById('lb-counter');
  var btnPrev = document.getElementById('nav-prev');
  var btnNext = document.getElementById('nav-next');
  var total = scenes.length;

  function clamp(n) { return Math.max(1, Math.min(total, n)); }

  function showScene(n) {
    n = clamp(n);
    scenes.forEach(function (s) {
      var idx = parseInt(s.getAttribute('data-scene'), 10);
      var active = idx === n;
      s.classList.toggle('active', active);
      if (active) {
        // re-trigger the entrance animation by removing then re-adding
        s.style.animation = 'none';
        // force reflow
        s.offsetHeight;
        s.style.animation = '';
      }
    });
    dots.forEach(function (d) {
      var idx = parseInt(d.getAttribute('data-go'), 10);
      d.classList.toggle('active', idx === n);
      d.classList.toggle('visited', idx < n);
    });
    if (counter) counter.textContent = 'Scene ' + n + ' of ' + total;
    btnPrev.disabled = (n === 1);
    if (n === total) {
      document.body.classList.add('scene-final-active');
      btnNext.style.display = 'none';
    } else {
      document.body.classList.remove('scene-final-active');
      btnNext.style.display = '';
    }
    // Update hash (without scrolling)
    var hash = '#' + n;
    if (window.location.hash !== hash) {
      history.replaceState(null, '', hash);
    }
    // Scroll to top of stage for the new scene
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function currentScene() {
    var fromHash = parseInt((window.location.hash || '#1').replace('#', ''), 10);
    return clamp(isNaN(fromHash) ? 1 : fromHash);
  }

  btnPrev.addEventListener('click', function () { showScene(currentScene() - 1); });
  btnNext.addEventListener('click', function () { showScene(currentScene() + 1); });
  dots.forEach(function (d) {
    d.addEventListener('click', function () {
      showScene(parseInt(d.getAttribute('data-go'), 10));
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (document.querySelector('dialog[open]')) return; // don't hijack while modal open
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      showScene(currentScene() + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      showScene(currentScene() - 1);
    }
  });

  // Handle direct hash changes (e.g., browser back/forward)
  window.addEventListener('hashchange', function () {
    showScene(currentScene());
  });

  // Initial show
  showScene(currentScene());

  // ---------- term definitions (shared modal, populated on click) ----------
  // Definitions intentionally duplicated from the main brief so /learn/ is
  // fully self-contained. If terms grow, consider extracting to /assets/.
  var TERM_DEFS = {
    'how-this-walks': {
      title: 'How this walkthrough works',
      body: '<p>Eight short scenes. Use the <em>Next</em> button (or the right-arrow key) to advance; the progress dots at the top let you jump around. Each scene is one screen.</p><p>Words with a dotted underline &mdash; <em>like this one</em> &mdash; open a plain-language definition when you tap them. Use them as needed; skip if you don\'t.</p><p>You can open the full briefing (the consulting memo version) at any time from the top-left link.</p>'
    },
    'foundation-model': {
      title: 'Foundation model',
      body: '<p>The base AI model trained by a company like OpenAI, Anthropic, or Google &mdash; what GPT, Claude, and Gemini are. Foundation models are very expensive to train but very cheap (relatively) to use once trained.</p><p>Products like Microsoft Copilot, Cursor, and Perplexity are built <em>on top of</em> these foundation models, drawing on their capabilities through paid access. The brief argues that partnering at the foundation-model layer is the strategic move, since the products above shift constantly while the foundation layer is where the real capabilities sit.</p>'
    },
    'agentic': {
      title: 'Agentic',
      body: '<p>AI that takes a sequence of actions on its own &mdash; clicking, typing, filling out forms, completing multi-step tasks &mdash; rather than just answering a single question.</p><p>Think of it as a digital assistant that <em>does</em> the work rather than <em>describes</em> how to do the work. The 2026 versions of ChatGPT, Claude, and Gemini all ship some form of this.</p>'
    },
    'learning-mode': {
      title: 'Learning Mode (Anthropic)',
      body: '<p>A feature inside Claude for Education. Instead of giving the student an answer directly, Claude asks guiding questions and helps the student reason their way to the answer.</p><p>The pedagogical bet: it&rsquo;s closer to how a good faculty member teaches than to how a chatbot typically responds. Northeastern\'s campus-wide deployment foregrounds it.</p>'
    },
    'multimodal': {
      title: 'Multimodal',
      body: '<p>AI that handles text, images, audio, and video together in one conversation &mdash; not just text in, text out. The model can read a video, look at a spreadsheet, and listen to an audio recording all in the same exchange.</p><p>In 2026, Google\'s Gemini is the only major AI model handling video natively in a single pass.</p>'
    },
    'generator': {
      title: 'The Generator (Babson)',
      body: '<p>Babson\'s interdisciplinary AI lab, founded by Erik Noyes (a co-author of the briefing). The Generator runs hands-on programs through the Weissman Foundry to put advanced AI tools in students\', faculty\', and small-business partners\' hands.</p><p>Current programs include the AI Innovators Bootcamp, the annual Build-a-thon, and the Babson&ndash;Microsoft small-business AI-agent pilot.</p>'
    },
    'weissman-foundry': {
      title: 'Weissman Foundry',
      body: '<p>Babson\'s collaborative makerspace and creative venture lab &mdash; the physical home for The Generator\'s programs. Students, faculty, and external partners build prototypes there.</p>'
    },
    'ai-innovators-bootcamp': {
      title: 'AI Innovators Bootcamp',
      body: '<p>A Generator program that pairs Babson faculty and students with small-business owners to build working AI prototypes for the business. Compressed into a single day; outcome-focused. The GemCopy example in the full briefing is one output.</p>'
    }
  };

  var termDialog = document.getElementById('term-dialog');
  var termTitleEl = document.getElementById('term-title');
  var termBodyEl = document.getElementById('term-body');
  var termCloseX = document.getElementById('term-close-x');

  function showTerm(key) {
    var def = TERM_DEFS[key];
    if (!def || !termDialog) return;
    termTitleEl.textContent = def.title;
    termBodyEl.innerHTML = def.body;
    if (typeof termDialog.showModal === 'function') termDialog.showModal();
    else termDialog.setAttribute('open', '');
  }
  function hideTerm() {
    if (!termDialog) return;
    if (typeof termDialog.close === 'function') termDialog.close();
    else termDialog.removeAttribute('open');
  }

  document.querySelectorAll('button.term[data-term]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showTerm(btn.getAttribute('data-term'));
    });
  });
  termCloseX && termCloseX.addEventListener('click', hideTerm);
  termDialog && termDialog.addEventListener('click', function (e) {
    if (e.target === termDialog) hideTerm();
  });
})();

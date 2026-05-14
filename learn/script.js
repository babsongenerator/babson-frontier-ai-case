/* ==========================================================================
   Walkthrough — hub + paths navigation, visited tracking, term modal
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

  // ---------- scene graph ----------
  // id → { kind, next, prev, path, isLastOfPath, trail }
  var SCENES = {
    'w1':    { kind: 'linear', next: 'w2',  prev: null,  trail: 'Why this matters &middot; 1 of 3' },
    'w2':    { kind: 'linear', next: 'w3',  prev: 'w1',  trail: 'Why this matters &middot; 2 of 3' },
    'w3':    { kind: 'linear', next: 'hub', prev: 'w2',  trail: 'Why this matters &middot; 3 of 3' },
    'hub':   { kind: 'hub',                              trail: 'Hub &middot; choose a path' },
    'a1':    { kind: 'path', path: 'a', next: 'a2',   prev: 'hub', trail: 'Providers &middot; 1 of 3' },
    'a2':    { kind: 'path', path: 'a', next: 'a3',   prev: 'a1',  trail: 'Providers &middot; 2 of 3' },
    'a3':    { kind: 'path', path: 'a', next: 'hub',  prev: 'a2',  isLast: true, trail: 'Providers &middot; 3 of 3' },
    'b1':    { kind: 'path', path: 'b', next: 'b2',   prev: 'hub', trail: 'Cost &middot; 1 of 2' },
    'b2':    { kind: 'path', path: 'b', next: 'hub',  prev: 'b1',  isLast: true, trail: 'Cost &middot; 2 of 2' },
    'c1':    { kind: 'path', path: 'c', next: 'c2',   prev: 'hub', trail: 'Peers &middot; 1 of 2' },
    'c2':    { kind: 'path', path: 'c', next: 'hub',  prev: 'c1',  isLast: true, trail: 'Peers &middot; 2 of 2' },
    'd1':    { kind: 'path', path: 'd', next: 'd2',   prev: 'hub', trail: 'Babson &middot; 1 of 2' },
    'd2':    { kind: 'path', path: 'd', next: 'hub',  prev: 'd1',  isLast: true, trail: 'Babson &middot; 2 of 2' },
    'close': { kind: 'close', next: null, prev: 'hub', trail: 'Where this lands' }
  };

  var ALL_PATHS = ['a', 'b', 'c', 'd'];
  var VISITED_KEY = 'babson-ai-paths-visited';

  // ---------- DOM refs ----------
  var sceneEls = Array.prototype.slice.call(document.querySelectorAll('.scene[data-scene]'));
  var hubCards = Array.prototype.slice.call(document.querySelectorAll('.hub-card[data-path-id]'));
  var trailEl  = document.getElementById('trail-here');
  var btnPrev  = document.getElementById('nav-prev');
  var btnNext  = document.getElementById('nav-next');
  var btnHub   = document.getElementById('nav-hub');
  var btnReset = document.getElementById('lb-reset');
  var hubProgress = document.getElementById('hub-progress');
  var hubProgressText = hubProgress ? hubProgress.querySelector('.hub-progress-text') : null;
  var hubFinish = document.querySelector('.hub-finish-link');

  // ---------- visited state ----------
  function getVisited() {
    try { return JSON.parse(localStorage.getItem(VISITED_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setVisited(arr) {
    try { localStorage.setItem(VISITED_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function markPathVisited(p) {
    var v = getVisited();
    if (v.indexOf(p) === -1) {
      v.push(p);
      setVisited(v);
    }
  }
  function resetVisited() {
    try { localStorage.removeItem(VISITED_KEY); } catch (e) {}
  }
  function renderVisited() {
    var v = getVisited();
    hubCards.forEach(function (c) {
      var p = c.getAttribute('data-path-id');
      c.classList.toggle('visited', v.indexOf(p) !== -1);
    });
    if (hubProgress && hubProgressText) {
      var n = v.length;
      if (n === 0) {
        hubProgress.hidden = true;
      } else if (n < ALL_PATHS.length) {
        hubProgress.hidden = false;
        hubProgressText.textContent = n + ' of ' + ALL_PATHS.length + ' paths visited';
      } else {
        hubProgress.hidden = false;
        hubProgressText.textContent = 'All four paths visited &mdash; the closing scene awaits when you\'re ready.';
        hubProgressText.innerHTML = hubProgressText.textContent.replace('--', '&mdash;');
      }
    }
    if (hubFinish && v.length === ALL_PATHS.length) {
      hubFinish.textContent = 'Continue to the closing →';
    }
  }

  // ---------- show / navigate ----------
  function showScene(id) {
    if (!SCENES[id]) id = 'w1';
    var entry = SCENES[id];

    sceneEls.forEach(function (s) {
      var active = s.getAttribute('data-scene') === id;
      s.classList.toggle('active', active);
      if (active) {
        // re-trigger entrance animation
        s.style.animation = 'none';
        s.offsetHeight;
        s.style.animation = '';
      }
    });

    // Mark path visited when we land on its last scene
    if (entry.isLast && entry.path) {
      markPathVisited(entry.path);
    }

    // Refresh hub state every time (we may have just marked a path visited)
    renderVisited();

    // Update body class so CSS can style hub-mode / close-mode differently
    document.body.classList.toggle('on-hub', id === 'hub');
    document.body.classList.toggle('on-close', id === 'close');

    // Trail label
    if (trailEl) trailEl.innerHTML = entry.trail || '';

    // Nav arrows
    var hasPrev = !!entry.prev;
    var hasNext = !!entry.next;
    btnPrev.disabled = !hasPrev;
    btnPrev.style.display = (id === 'hub' ? 'none' : '');
    btnNext.disabled = !hasNext;
    btnNext.style.display = (id === 'hub' || id === 'close' || !hasNext) ? 'none' : '';
    // "Hub" arrow visible whenever we're not already there and not on the first scene
    btnHub.style.display = (id === 'hub' || id === 'w1') ? 'none' : '';

    // Customize Next label for last scenes / wraps
    var nextLabel = btnNext.querySelector('.nav-arrow-label');
    if (nextLabel) {
      if (entry.isLast) {
        nextLabel.textContent = 'Back to hub';
      } else if (id === 'w3') {
        nextLabel.textContent = 'Choose a path';
      } else {
        nextLabel.textContent = 'Next';
      }
    }

    // Update URL hash without scrolling
    var hash = '#' + id;
    if (window.location.hash !== hash) {
      history.replaceState(null, '', hash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function currentId() {
    var fromHash = (window.location.hash || '#w1').replace('#', '');
    return SCENES[fromHash] ? fromHash : 'w1';
  }

  // ---------- wiring ----------
  btnPrev.addEventListener('click', function () {
    var entry = SCENES[currentId()];
    if (entry && entry.prev) showScene(entry.prev);
  });
  btnNext.addEventListener('click', function () {
    var entry = SCENES[currentId()];
    if (entry && entry.next) showScene(entry.next);
  });
  btnHub.addEventListener('click', function () { showScene('hub'); });

  hubCards.forEach(function (c) {
    c.addEventListener('click', function () {
      var target = c.getAttribute('data-go');
      if (SCENES[target]) showScene(target);
    });
  });

  btnReset.addEventListener('click', function () {
    if (confirm('Start the walkthrough over? Your visited paths will be cleared.')) {
      resetVisited();
      showScene('w1');
    }
  });

  // hub "skip ahead" anchor
  document.querySelectorAll('a[href="#close"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      showScene('close');
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (document.querySelector('dialog[open]')) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' && e.target.classList.contains('hub-card'))) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      var entry = SCENES[currentId()];
      if (entry && entry.next) { e.preventDefault(); showScene(entry.next); }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      var entry2 = SCENES[currentId()];
      if (entry2 && entry2.prev) { e.preventDefault(); showScene(entry2.prev); }
    } else if (e.key === 'h' || e.key === 'H') {
      if (currentId() !== 'hub') { e.preventDefault(); showScene('hub'); }
    }
  });

  window.addEventListener('hashchange', function () { showScene(currentId()); });

  // Initial render
  renderVisited();
  showScene(currentId());

  // ---------- term definitions ----------
  var TERM_DEFS = {
    'how-this-walks': {
      title: 'How this walkthrough works',
      body: '<p>Three short "why" scenes set the context, then a hub lets you choose what to dive into next: the providers, the cost, the peers, or what Babson is already doing.</p><p>Words with a dotted underline open a plain-language definition. Press <em>H</em> at any time to jump back to the hub.</p>'
    },
    'foundation-model': {
      title: 'Foundation model',
      body: '<p>The base AI model trained by a company like OpenAI, Anthropic, or Google &mdash; what GPT, Claude, and Gemini are. Foundation models are very expensive to train but relatively inexpensive to use once trained.</p><p>Products like Microsoft Copilot, Cursor, and Perplexity are built <em>on top of</em> these foundation models. The brief argues that partnering at the foundation-model layer is the strategic move, since the products above shift constantly while the foundation layer is where the real capabilities sit.</p>'
    },
    'agentic': {
      title: 'Agentic',
      body: '<p>AI that takes a sequence of actions on its own &mdash; clicking, typing, filling out forms, completing multi-step tasks &mdash; rather than just answering a single question.</p><p>Think of it as a digital assistant that <em>does</em> the work rather than <em>describes</em> how to do it. The 2026 versions of ChatGPT, Claude, and Gemini all ship some form of this.</p>'
    },
    'workspace-agents': {
      title: 'Workspace Agents (OpenAI)',
      body: '<p>OpenAI\'s product that runs multi-step workflows inside enterprise tools &mdash; Salesforce, Slack, HubSpot, and similar. Launched April 2026 alongside GPT-5.5.</p><p>A student running a venture can use Workspace Agents to follow up on leads, post updates to a team channel, or schedule meetings as background actions, without writing code for each piece.</p>'
    },
    'learning-mode': {
      title: 'Learning Mode (Anthropic)',
      body: '<p>A feature inside Claude for Education. Instead of giving the student an answer directly, Claude asks guiding questions and helps the student reason their way to the answer.</p><p>The pedagogical bet: it&rsquo;s closer to how a good faculty member teaches than to how a chatbot typically responds. Northeastern\'s campus-wide deployment foregrounds it.</p>'
    },
    'multimodal': {
      title: 'Multimodal',
      body: '<p>AI that handles text, images, audio, and video together in one conversation &mdash; not just text in, text out. The model can read a video, look at a spreadsheet, and listen to an audio recording all in the same exchange.</p><p>In 2026, Google\'s Gemini is the only major AI model handling video natively in a single pass.</p>'
    },
    'workspace-intelligence': {
      title: 'Workspace Intelligence (Google)',
      body: '<p>Google\'s product launched April 2026 that puts the Gemini AI model directly into Gmail, Docs, Sheets, Slides, and the rest of Google Workspace.</p><p>Functionally analogous to how Microsoft Copilot puts AI inside Word, Excel, Outlook, and Teams. If Babson runs on Google Workspace, this is the surface Gemini reaches most natively.</p>'
    },
    'chatgpt-edu': {
      title: 'ChatGPT Edu',
      body: '<p>OpenAI\'s education-tier ChatGPT product. Includes single sign-on, data-isolation guarantees (no training on student prompts), and institutional admin controls.</p><p>Distinct from consumer ChatGPT (which individuals use) and ChatGPT Business (the commercial tier). The education tier is what Wharton, Oxford, UCLA, and the California State University system deploy.</p>'
    },
    'claude-for-education': {
      title: 'Claude for Education',
      body: '<p>Anthropic\'s education-tier product. Includes Learning Mode (the pedagogically-designed feature that guides student reasoning), single sign-on, data isolation, and institutional admin controls.</p><p>Northeastern, LSE, and Champlain have campus-wide deployments. Pricing is negotiated, not list.</p>'
    },
    'generator': {
      title: 'The Generator (Babson)',
      body: '<p>Babson\'s interdisciplinary AI lab, founded by Erik Noyes (a co-author of this brief). The Generator runs hands-on programs through the Weissman Foundry to put advanced AI tools in students\', faculty\', and small-business partners\' hands.</p><p>Current programs include the AI Innovators Bootcamp, the annual Build-a-thon, and the Babson&ndash;Microsoft small-business AI-agent pilot.</p>'
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

  var termDialog  = document.getElementById('term-dialog');
  var termTitleEl = document.getElementById('term-title');
  var termBodyEl  = document.getElementById('term-body');
  var termCloseX  = document.getElementById('term-close-x');

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
      e.stopPropagation();
      showTerm(btn.getAttribute('data-term'));
    });
  });
  termCloseX && termCloseX.addEventListener('click', hideTerm);
  termDialog && termDialog.addEventListener('click', function (e) {
    if (e.target === termDialog) hideTerm();
  });
})();

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
    'a1':    { kind: 'path', path: 'a', next: 'a2',   prev: 'hub', trail: 'Providers &middot; 1 of 4' },
    'a2':    { kind: 'path', path: 'a', next: 'a3',   prev: 'a1',  trail: 'Providers &middot; 2 of 4' },
    'a3':    { kind: 'path', path: 'a', next: 'a4',   prev: 'a2',  trail: 'Providers &middot; 3 of 4' },
    'a4':    { kind: 'path', path: 'a', next: 'hub',  prev: 'a3',  isLast: true, trail: 'Providers &middot; 4 of 4' },
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
  var SCENES_VISITED_KEY = 'babson-ai-scenes-visited';

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
  function getScenesVisited() {
    try { return JSON.parse(localStorage.getItem(SCENES_VISITED_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setScenesVisited(arr) {
    try { localStorage.setItem(SCENES_VISITED_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function markSceneVisited(id) {
    var v = getScenesVisited();
    if (v.indexOf(id) === -1) {
      v.push(id);
      setScenesVisited(v);
    }
  }
  function resetScenesVisited() {
    try { localStorage.removeItem(SCENES_VISITED_KEY); } catch (e) {}
  }
  function renderSidebar(currentId) {
    var visited = getScenesVisited();
    var items = document.querySelectorAll('.ls-item[data-go]');
    Array.prototype.forEach.call(items, function (item) {
      var id = item.getAttribute('data-go');
      var isV = visited.indexOf(id) !== -1;
      var isC = id === currentId;
      item.classList.toggle('visited', isV);
      item.classList.toggle('current', isC);
    });
    // Counter is path-based, not scene-based — feels less daunting than "X of 14"
    var pathsVisited = getVisited().length;
    var progressEl = document.getElementById('ls-progress');
    if (progressEl) {
      progressEl.textContent = pathsVisited + ' of ' + ALL_PATHS.length + ' paths';
    }
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

    // Mark every visited scene; this drives the sidebar checkmarks
    markSceneVisited(id);
    // Mark path visited when we land on its last scene
    if (entry.isLast && entry.path) {
      markPathVisited(entry.path);
    }

    // Refresh hub state and sidebar every time
    renderVisited();
    renderSidebar(id);

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
    if (confirm('Start the walkthrough over? Your visited scenes will be cleared.')) {
      resetVisited();
      resetScenesVisited();
      showScene('w1');
    }
  });

  // Sidebar item clicks
  Array.prototype.forEach.call(document.querySelectorAll('.ls-item[data-go]'), function (item) {
    item.addEventListener('click', function () {
      var id = item.getAttribute('data-go');
      if (SCENES[id]) showScene(id);
      if (window.matchMedia && window.matchMedia('(max-width: 900px)').matches) {
        document.body.classList.remove('sidebar-open');
      }
    });
  });

  // Sidebar toggle (mobile)
  var lsToggle = document.getElementById('ls-toggle');
  if (lsToggle) {
    lsToggle.addEventListener('click', function () {
      document.body.classList.toggle('sidebar-open');
    });
  }
  var lsOverlay = document.getElementById('learn-sidebar-overlay');
  if (lsOverlay) {
    lsOverlay.addEventListener('click', function () {
      document.body.classList.remove('sidebar-open');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
      document.body.classList.remove('sidebar-open');
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

  // ---------- citation popover (refs.json) ----------
  var REFS = null;
  fetch('data/refs.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { if (d && d.refs) REFS = d.refs; })
    .catch(function () { /* offline / file:// — fail quietly */ });

  var citeDialog  = document.getElementById('cite-dialog');
  var citeTitleEl = document.getElementById('cite-title');
  var citeMetaEl  = document.getElementById('cite-meta');
  var citeQuoteEl = document.getElementById('cite-quote');
  var citeLinkEl  = document.getElementById('cite-link');
  var citeCloseX  = document.getElementById('cite-close-x');

  function formatRefDate(iso) {
    if (!iso) return '';
    var parts = iso.split('-');
    if (parts.length < 2) return parts[0] || '';
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var m = parseInt(parts[1], 10) - 1;
    var y = parts[0];
    return (months[m] || '') + ' ' + y;
  }

  function showCite(n) {
    if (!citeDialog) return;
    if (!REFS) {
      // refs.json hasn't loaded — degrade to ref number only
      citeTitleEl.textContent = 'Source ' + n;
      citeMetaEl.textContent = 'Reference data still loading. Try again in a moment, or see the main brief.';
      citeQuoteEl.hidden = true;
      citeLinkEl.setAttribute('href', '../#ref-' + n);
      citeLinkEl.textContent = 'Open in the full brief →';
    } else {
      var ref = REFS[String(n)];
      if (!ref) return;
      citeTitleEl.textContent = ref.title || ('Reference ' + n);
      var meta = ref.source || '';
      var dateLabel = formatRefDate(ref.date);
      if (dateLabel) meta += '  ·  ' + dateLabel;
      meta += '  ·  Reference ' + n;
      citeMetaEl.textContent = meta;
      if (ref.quote) {
        citeQuoteEl.textContent = ref.quote;
        citeQuoteEl.hidden = false;
      } else {
        citeQuoteEl.hidden = true;
      }
      citeLinkEl.setAttribute('href', ref.url || '#');
      citeLinkEl.textContent = 'Read the source →';
    }
    if (typeof citeDialog.showModal === 'function') citeDialog.showModal();
    else citeDialog.setAttribute('open', '');
  }

  function hideCite() {
    if (!citeDialog) return;
    if (typeof citeDialog.close === 'function') citeDialog.close();
    else citeDialog.removeAttribute('open');
  }

  // Event delegation so dynamically-added cite buttons (a4, e1) work too
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var btn = e.target.closest('button.cite[data-cite]');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      showCite(btn.getAttribute('data-cite'));
    }
  });
  citeCloseX && citeCloseX.addEventListener('click', hideCite);
  citeDialog && citeDialog.addEventListener('click', function (e) {
    if (e.target === citeDialog) hideCite();
  });

  // ---------- capability table (a4) ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }

  function renderCapabilities() {
    var mount  = document.getElementById('capabilities-table');
    var noteEl = document.getElementById('capabilities-note');
    if (!mount) return;
    fetch('data/capabilities.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.rows)) {
          mount.innerHTML = '<p class="compare-loading">Comparison data could not load. See the full briefing for the underlying details.</p>';
          return;
        }
        var providers = [
          { key: 'openai',    label: 'OpenAI',            cls: 'col-openai'    },
          { key: 'anthropic', label: 'Anthropic',         cls: 'col-anthropic' },
          { key: 'google',    label: 'Google',            cls: 'col-google'    },
          { key: 'copilot',   label: 'Microsoft Copilot', cls: 'col-copilot'   }
        ];
        // Order rows: topline (the 5 most-decision-relevant) first, then detail rows hidden by default
        var topline = data.rows.filter(function (r) { return r.topline; });
        var detail  = data.rows.filter(function (r) { return !r.topline; });
        var ordered = topline.concat(detail);
        var out = '<table class="capability-table"><thead><tr><th class="cap-row-label"><span class="cap-corner">Capability</span></th>';
        providers.forEach(function (p) {
          out += '<th class="' + p.cls + '">' + p.label + '</th>';
        });
        out += '</tr></thead><tbody>';
        ordered.forEach(function (row) {
          var rowCls = row.topline ? 'row-topline' : 'row-detail';
          out += '<tr class="' + rowCls + '"><th class="cap-row-label">' + escapeHtml(row.label) + '</th>';
          providers.forEach(function (p) {
            var cell = row.cells && row.cells[p.key];
            if (!cell) { out += '<td class="' + p.cls + '"></td>'; return; }
            out += '<td class="' + p.cls + '">';
            out +=   '<span class="cap-value">' + escapeHtml(cell.value || '') + '</span>';
            if (cell.detail) out += '<span class="cap-detail">' + escapeHtml(cell.detail) + '</span>';
            if (cell.refUrl) out += '<a class="cap-source" href="' + cell.refUrl + '" target="_blank" rel="noopener">source &rarr;</a>';
            out += '</td>';
          });
          out += '</tr>';
        });
        out += '</tbody></table>';
        // Toggle for detail rows
        var detailCount = detail.length;
        var toggle = '<button type="button" class="cap-toggle" id="cap-toggle" aria-expanded="false">Show all ' + ordered.length + ' rows <span class="cap-toggle-detail">(' + detailCount + ' more: context window, open API, partnerships, pricing, open weights)</span></button>';
        mount.innerHTML = out + toggle;
        if (data.note && noteEl) noteEl.textContent = data.note;
        var capToggle = document.getElementById('cap-toggle');
        var compareWrap = mount.closest('.hero-compare');
        if (capToggle && compareWrap) {
          capToggle.addEventListener('click', function () {
            var expanded = compareWrap.classList.toggle('expanded');
            capToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            if (expanded) {
              capToggle.innerHTML = 'Show topline only <span class="cap-toggle-detail">(' + topline.length + ' core capabilities)</span>';
            } else {
              capToggle.innerHTML = 'Show all ' + ordered.length + ' rows <span class="cap-toggle-detail">(' + detailCount + ' more: context window, open API, partnerships, pricing, open weights)</span>';
            }
          });
        }
      })
      .catch(function () {
        mount.innerHTML = '<p class="compare-loading">Comparison data could not load. See the full briefing for the underlying details.</p>';
      });
  }
  renderCapabilities();

  // ---------- cost calculator (b2) ----------
  // Tier blended monthly rate per user (USD) based on b1 list prices:
  //   1 provider ≈ avg($15, $18, $20)  ≈ $17.67
  //   2 providers ≈ pair average        ≈ $35.33
  //   3 providers ≈ all three           ≈ $53.00
  var CC_RATES = { '1': 17.67, '2': 35.33, '3': 53.00 };

  function formatMoney(amount) {
    if (amount >= 1e6) return '$' + (amount / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    if (amount >= 1e3) return '$' + Math.round(amount / 1e3) + 'K';
    return '$' + Math.round(amount);
  }
  function formatInt(n) { return n.toLocaleString('en-US'); }

  function recalcCost() {
    var slider   = document.getElementById('cc-users');
    var usersOut = document.getElementById('cc-users-out');
    var valOut   = document.getElementById('cc-result-value');
    var anchorsEl = document.getElementById('cc-result-anchors');
    if (!slider || !valOut) return;
    var users = parseInt(slider.value, 10) || 0;
    var activeBtn = document.querySelector('.cc-tier.active');
    var tier = activeBtn ? activeBtn.getAttribute('data-tier') : '2';
    var rate = CC_RATES[tier] || CC_RATES['2'];
    var annual = users * rate * 12;
    usersOut.textContent = formatInt(users);
    valOut.textContent = formatMoney(annual);
    if (anchorsEl) {
      var perUserPerMonth = rate.toFixed(2);
      var anchorTxt = '';
      anchorTxt += '<span class="anchor-line">&approx; ' + formatInt(users) + ' users &times; $' + perUserPerMonth + '/user/month &times; 12.</span>';
      if (annual < 1.4e6) {
        anchorTxt += '<span class="anchor-line">About one endowed faculty chair&rsquo;s annual payout.</span>';
      } else if (annual < 2.4e6) {
        anchorTxt += '<span class="anchor-line">About two endowed chairs&rsquo; annual payout.</span>';
      } else {
        anchorTxt += '<span class="anchor-line">About three to four endowed chairs&rsquo; annual payout.</span>';
      }
      anchorsEl.innerHTML = anchorTxt;
    }
  }

  var ccSlider = document.getElementById('cc-users');
  if (ccSlider) {
    ccSlider.addEventListener('input', recalcCost);
    Array.prototype.forEach.call(document.querySelectorAll('.cc-tier'), function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.cc-tier').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        recalcCost();
      });
    });
    recalcCost();
  }

  // ---------- peer-adoption timeline (c1) ----------
  function renderPeersTimeline() {
    var mount = document.getElementById('peers-timeline');
    if (!mount) return;
    fetch('data/peers.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.peers)) {
          mount.innerHTML = '<p class="timeline-loading">Timeline data could not load. See the full briefing.</p>';
          return;
        }
        var peers = data.peers.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });

        // Time range — pad a half-month either side of the data.
        var minD = new Date(peers[0].date);
        var maxD = new Date(peers[peers.length - 1].date);
        var startDate = new Date(minD.getFullYear(), minD.getMonth() - 1, 1);
        var endDate   = new Date(maxD.getFullYear(), maxD.getMonth() + 2, 1);
        var totalMs = endDate - startDate;

        var W = 880, H = 320;
        var padL = 100, padR = 30, padT = 28, padB = 56;
        var chartW = W - padL - padR;
        var laneH = (H - padT - padB) / 3;

        var providers = {
          'OpenAI':    { color: '#10a37f', lane: 0 },
          'Anthropic': { color: '#c96100', lane: 1 },
          'Google':    { color: '#1a73e8', lane: 2 }
        };
        function xFor(dateStr) {
          var d = new Date(dateStr);
          return padL + ((d - startDate) / totalMs) * chartW;
        }
        function yFor(provider) {
          var info = providers[provider] || providers.OpenAI;
          return padT + (info.lane + 0.5) * laneH;
        }

        var svg = '<svg class="timeline-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Peer institution AI adoption timeline">';

        // Lane lines + labels
        Object.keys(providers).forEach(function (p) {
          var info = providers[p];
          var y = padT + (info.lane + 0.5) * laneH;
          svg += '<line x1="' + padL + '" x2="' + (padL + chartW) + '" y1="' + y + '" y2="' + y + '" stroke="' + info.color + '" stroke-opacity="0.2" stroke-width="1.5"/>';
          svg += '<text class="lane-label" x="' + (padL - 14) + '" y="' + y + '" fill="' + info.color + '">' + p + '</text>';
        });

        // X-axis ticks at each January and end
        var ticks = [];
        var y = startDate.getFullYear();
        while (y <= endDate.getFullYear()) {
          ticks.push(new Date(y, 0, 1));
          if (y < endDate.getFullYear()) ticks.push(new Date(y, 6, 1));
          y++;
        }
        ticks.forEach(function (t) {
          if (t < startDate || t > endDate) return;
          var x = padL + ((t - startDate) / totalMs) * chartW;
          var label = t.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          svg += '<line x1="' + x + '" x2="' + x + '" y1="' + padT + '" y2="' + (H - padB + 4) + '" stroke="#dcdcdc" stroke-dasharray="2,4"/>';
          svg += '<text class="tick-label" x="' + x + '" y="' + (H - padB + 20) + '">' + label + '</text>';
        });

        // Compute label offset per dot — alternate above/below + small jitter
        // so close neighbors don't overlap.
        var occupied = {}; // x-bucket → side
        function chooseDy(x, provider) {
          var bucket = Math.round(x / 30);
          // Same provider lane crowding only matters within ±1 bucket
          var lastSide = occupied[provider + ':' + bucket];
          if (lastSide === undefined) lastSide = occupied[provider + ':' + (bucket - 1)];
          var side = (lastSide === 'down') ? 'up' : 'down';
          occupied[provider + ':' + bucket] = side;
          return side === 'down' ? 22 : -12;
        }

        peers.forEach(function (peer) {
          var x = xFor(peer.date);
          var yp = yFor(peer.provider);
          var color = (providers[peer.provider] || providers.OpenAI).color;
          var dy = chooseDy(x, peer.provider);
          var safe = peer.school.replace(/"/g, '&quot;');
          var deal = (peer.dealType || '').replace(/"/g, '&quot;');
          svg += '<g class="peer-dot" data-url="' + peer.url + '" tabindex="0">';
          svg += '<circle cx="' + x + '" cy="' + yp + '" r="6" fill="' + color + '" stroke="#ffffff" stroke-width="2"/>';
          svg += '<text class="dot-label" x="' + x + '" y="' + (yp + dy) + '">' + peer.shortName + '</text>';
          svg += '<title>' + safe + ' — ' + deal + ' (' + peer.date + ')</title>';
          svg += '</g>';
        });
        svg += '</svg>';

        // Stacked list — visible on mobile via CSS
        var list = '<ul class="timeline-list">';
        peers.forEach(function (peer) {
          var color = (providers[peer.provider] || providers.OpenAI).color;
          list += '<li class="timeline-list-item">';
          list += '<span class="tll-date">' + peer.date.slice(0, 7) + '</span>';
          list += '<span class="tll-provider" style="color:' + color + '">' + peer.provider + '</span>';
          list += '<a class="tll-school" href="' + peer.url + '" target="_blank" rel="noopener">' + peer.school + '</a>';
          list += '<span class="tll-deal">' + (peer.dealType || '') + '</span>';
          list += '</li>';
        });
        list += '</ul>';

        mount.innerHTML = svg + list;
        // Click + keyboard handlers for SVG dots
        Array.prototype.forEach.call(mount.querySelectorAll('.peer-dot'), function (g) {
          var open = function () {
            var url = g.getAttribute('data-url');
            if (url) window.open(url, '_blank', 'noopener');
          };
          g.addEventListener('click', open);
          g.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
          });
        });
      })
      .catch(function () {
        mount.innerHTML = '<p class="timeline-loading">Timeline data could not load. See the full briefing.</p>';
      });
  }
  renderPeersTimeline();
})();

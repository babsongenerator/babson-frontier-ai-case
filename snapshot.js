/* ==========================================================================
   Snapshot — shared client logic for the 3-page short version.
   Covers: term-popovers, citation-popovers, peer-timeline rendering.
   ========================================================================== */

(function () {
  // ---------- term definitions (plain-language explainers) ----------
  var TERM_DEFS = {
    'foundation-model': {
      title: 'Foundation model',
      body: '<p>The base AI model trained by a company like OpenAI, Anthropic, or Google &mdash; what GPT, Claude, and Gemini are. Foundation models are very expensive to train but relatively inexpensive to use once trained.</p><p>Products like Microsoft Copilot, Cursor, and Perplexity are built <em>on top of</em> these foundation models.</p>'
    },
    'agentic': {
      title: 'Agentic',
      body: '<p>AI that takes a sequence of actions on its own &mdash; clicking, typing, filling out forms, completing multi-step tasks &mdash; rather than just answering a single question.</p><p>Think of it as a digital assistant that <em>does</em> the work rather than <em>describes</em> how to do it.</p>'
    },
    'multimodal': {
      title: 'Multimodal',
      body: '<p>AI that handles text, images, audio, and video together in one conversation. The model can read a video, look at a spreadsheet, and listen to an audio recording in the same exchange.</p><p>All three frontier models accept multimodal input; Google&rsquo;s Gemini has the strongest native video handling among them.</p>'
    },
    'chatgpt-edu': {
      title: 'ChatGPT Edu',
      body: '<p>OpenAI&rsquo;s education-tier ChatGPT product. Includes single sign-on, data-isolation guarantees (no training on student prompts), and institutional admin controls.</p><p>What Wharton, Oxford, UCLA, and the California State University system deploy.</p>'
    },
    'claude-for-education': {
      title: 'Claude for Education',
      body: '<p>Anthropic&rsquo;s education-tier product. Includes Learning Mode (the pedagogically-designed feature that guides student reasoning), single sign-on, data isolation, and institutional admin controls.</p>'
    },
    'workspace-agents': {
      title: 'Workspace Agents',
      body: '<p>OpenAI&rsquo;s product that runs multi-step workflows inside enterprise tools &mdash; email, calendar, CRM, team chat, and similar. Launched April 2026 alongside GPT-5.5.</p>'
    },
    'learning-mode': {
      title: 'Learning Mode',
      body: '<p>A feature inside Claude for Education. Instead of giving the student an answer directly, Claude asks guiding questions and helps the student reason their way to the answer.</p>'
    },
    'vibe-coded': {
      title: 'Vibe-coded',
      body: '<p>Built through natural-language conversation with an AI (Anthropic&rsquo;s Claude, in this case), rather than written by hand in code. The author describes what they want; the AI writes the implementation.</p><p>A faculty member with no engineering background can produce a working interactive site in an afternoon. That is part of what these tools have made possible.</p>'
    }
  };

  // ---------- term modal ----------
  var termDialog  = document.getElementById('term-dialog');
  var termTitleEl = document.getElementById('term-title');
  var termBodyEl  = document.getElementById('term-body');
  var termCloseX  = document.getElementById('term-close-x');

  function showTerm(key) {
    var def = TERM_DEFS[key];
    if (!def || !termDialog) return;
    termTitleEl.textContent = def.title;
    termBodyEl.innerHTML = def.body;
    try {
      if (typeof termDialog.showModal === 'function') termDialog.showModal();
      else termDialog.setAttribute('open', '');
    } catch (e) { /* dialog already open, or display:none — silently no-op */ }
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

  // ---------- citation modal (loads ../data/refs.json once) ----------
  var REFS = null;
  fetch('data/refs.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { if (d && d.refs) REFS = d.refs; })
    .catch(function () {});

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
    return (months[m] || '') + ' ' + parts[0];
  }
  function showCite(n) {
    if (!citeDialog) return;
    if (!REFS) {
      citeTitleEl.textContent = 'Source ' + n;
      citeMetaEl.textContent  = 'Reference data still loading. Try again in a moment.';
      citeQuoteEl.hidden = true;
      citeLinkEl.setAttribute('href', '../brief.html#ref-' + n);
      citeLinkEl.textContent = 'Open in the full briefing →';
    } else {
      var ref = REFS[String(n)];
      if (!ref) return;
      citeTitleEl.textContent = ref.title || ('Reference ' + n);
      var meta = ref.source || '';
      var d = formatRefDate(ref.date);
      if (d) meta += '  ·  ' + d;
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
    try {
      if (typeof citeDialog.showModal === 'function') citeDialog.showModal();
      else citeDialog.setAttribute('open', '');
    } catch (e) { /* already open — ignore */ }
  }
  function hideCite() {
    if (!citeDialog) return;
    if (typeof citeDialog.close === 'function') citeDialog.close();
    else citeDialog.removeAttribute('open');
  }
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

  // ---------- peer timeline (only renders on peers.html) ----------
  function renderTimeline() {
    var mount = document.getElementById('snap-timeline');
    if (!mount) return;
    fetch('data/peers.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.peers)) return;
        var peers = data.peers.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
        var minD = new Date(peers[0].date);
        var maxD = new Date(peers[peers.length - 1].date);
        var startDate = new Date(minD.getFullYear(), minD.getMonth() - 1, 1);
        var endDate   = new Date(maxD.getFullYear(), maxD.getMonth() + 2, 1);
        var totalMs = endDate - startDate;
        var W = 860, H = 320;
        var padL = 100, padR = 30, padT = 28, padB = 56;
        var chartW = W - padL - padR;
        var laneH = (H - padT - padB) / 3;
        var providers = {
          'OpenAI':    { color: '#10a37f', lane: 0 },
          'Anthropic': { color: '#c96100', lane: 1 },
          'Google':    { color: '#1a73e8', lane: 2 }
        };
        function xFor(s) { return padL + ((new Date(s) - startDate) / totalMs) * chartW; }
        function yFor(p) { var info = providers[p] || providers.OpenAI; return padT + (info.lane + 0.5) * laneH; }

        var svg = '<svg class="snap-timeline-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Peer institution AI adoption timeline">';
        Object.keys(providers).forEach(function (p) {
          var info = providers[p];
          var y = padT + (info.lane + 0.5) * laneH;
          svg += '<line x1="' + padL + '" x2="' + (padL + chartW) + '" y1="' + y + '" y2="' + y + '" stroke="' + info.color + '" stroke-opacity="0.2" stroke-width="1.5"/>';
          svg += '<text class="lane-label" x="' + (padL - 14) + '" y="' + y + '" fill="' + info.color + '">' + p + '</text>';
        });
        var ticks = [];
        var y0 = startDate.getFullYear();
        while (y0 <= endDate.getFullYear()) {
          ticks.push(new Date(y0, 0, 1));
          if (y0 < endDate.getFullYear()) ticks.push(new Date(y0, 6, 1));
          y0++;
        }
        ticks.forEach(function (t) {
          if (t < startDate || t > endDate) return;
          var x = padL + ((t - startDate) / totalMs) * chartW;
          var label = t.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          svg += '<line x1="' + x + '" x2="' + x + '" y1="' + padT + '" y2="' + (H - padB + 4) + '" stroke="#dcdcdc" stroke-dasharray="2,4"/>';
          svg += '<text class="tick-label" x="' + x + '" y="' + (H - padB + 20) + '">' + label + '</text>';
        });
        var occupied = {};
        function chooseDy(x, provider) {
          var b = Math.round(x / 30);
          var last = occupied[provider + ':' + b];
          if (last === undefined) last = occupied[provider + ':' + (b - 1)];
          var side = (last === 'down') ? 'up' : 'down';
          occupied[provider + ':' + b] = side;
          return side === 'down' ? 22 : -12;
        }
        peers.forEach(function (peer) {
          var x = xFor(peer.date);
          var yp = yFor(peer.provider);
          var color = (providers[peer.provider] || providers.OpenAI).color;
          var dy = chooseDy(x, peer.provider);
          var safe = (peer.school || '').replace(/"/g, '&quot;');
          var deal = (peer.dealType || '').replace(/"/g, '&quot;');
          var safeUrl = (peer.url || '').replace(/"/g, '&quot;');
          svg += '<g class="peer-dot" data-url="' + safeUrl + '" tabindex="0">';
          svg += '<circle cx="' + x + '" cy="' + yp + '" r="6" fill="' + color + '" stroke="#ffffff" stroke-width="2"/>';
          svg += '<text class="dot-label" x="' + x + '" y="' + (yp + dy) + '">' + (peer.shortName || '') + '</text>';
          svg += '<title>' + safe + ' — ' + deal + ' (' + peer.date + ')</title>';
          svg += '</g>';
        });
        svg += '</svg>';

        var list = '<ul class="snap-timeline-list">';
        peers.forEach(function (peer) {
          var color = (providers[peer.provider] || providers.OpenAI).color;
          list += '<li>';
          list += '<span class="tll-date">' + peer.date.slice(0, 7) + '</span>';
          list += '<span class="tll-prov" style="color:' + color + '">' + peer.provider + '</span>';
          list += '<a class="tll-school" href="' + peer.url + '" target="_blank" rel="noopener">' + (peer.school || '') + '</a>';
          list += '<span class="tll-deal">' + (peer.dealType || '') + '</span>';
          list += '</li>';
        });
        list += '</ul>';

        mount.innerHTML = svg + list;
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
      });
  }
  renderTimeline();
})();

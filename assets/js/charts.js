/* ============================================================
   Chart.js configs for The Frontier Case.
   ALL DATA VALUES ARE PLACEHOLDERS. Replace with real numbers
   before sharing externally. Each chart is keyed to a canvas id;
   init runs only if that id exists on the current page.
   ============================================================ */

(function () {
  if (typeof Chart === 'undefined') return;

  // Palette pulled from CSS vars so charts stay in brand.
  const css = getComputedStyle(document.documentElement);
  const C = {
    green:    css.getPropertyValue('--c-green').trim()    || '#006747',
    greenD:   css.getPropertyValue('--c-green-d').trim()  || '#00472f',
    amber:    css.getPropertyValue('--c-amber').trim()    || '#C9A227',
    amberD:   css.getPropertyValue('--c-amber-d').trim()  || '#9A7C1B',
    ink:      css.getPropertyValue('--c-ink').trim()      || '#14191F',
    muted:    css.getPropertyValue('--c-muted').trim()    || '#5A5F66',
    rule:     css.getPropertyValue('--c-rule').trim()     || '#E5E0D6',
  };

  // Defaults applied to every chart on the page.
  Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  Chart.defaults.font.size = 13;
  Chart.defaults.color = C.ink;
  Chart.defaults.borderColor = C.rule;
  Chart.defaults.plugins.legend.labels.boxWidth = 14;

  function on(id, fn) {
    const el = document.getElementById(id);
    if (el) fn(el);
  }

  // 1. Home — share of entrepreneurs using each frontier model (doughnut).
  on('chart-home-share', (el) => {
    new Chart(el, {
      type: 'doughnut',
      data: {
        labels: ['Anthropic', 'OpenAI', 'Google (Gemini)', 'Other / none'],
        datasets: [{
          // [PLACEHOLDER: real distribution of frontier model usage among entrepreneurs]
          data: [32, 38, 18, 12],
          backgroundColor: [C.amber, C.green, C.greenD, C.muted],
          borderColor: '#fff',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '55%',
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}% [placeholder]` },
          },
        },
      },
    });
  });

  // 2. Home — Where Gemini sits (horizontal bar).
  on('chart-home-landscape', (el) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Anthropic Claude', 'OpenAI GPT', 'Google Gemini', 'Meta Llama (open)', 'Mistral (open)'],
        datasets: [{
          label: 'Composite frontier capability index',
          // [PLACEHOLDER: replace with a defensible composite index — e.g. average of LMArena, MMLU-Pro, GPQA]
          data: [92, 90, 86, 74, 68],
          backgroundColor: [C.amber, C.green, C.greenD, C.muted, C.muted],
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { beginAtZero: true, max: 100, grid: { color: C.rule } },
          y: { grid: { display: false } },
        },
        plugins: { legend: { display: false } },
      },
    });
  });

  // 3. Costs — partnership tier × use case (grouped bar).
  on('chart-costs', (el) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Pilot', 'Department', 'Institution'],
        datasets: [
          {
            label: 'Student API access',
            // [PLACEHOLDER: real annual $ for student API access tier]
            data: [15000, 60000, 180000],
            backgroundColor: C.green,
          },
          {
            label: 'Classroom seats',
            // [PLACEHOLDER: real annual $ for classroom seats]
            data: [8000, 32000, 90000],
            backgroundColor: C.amber,
          },
          {
            label: 'Research / faculty',
            // [PLACEHOLDER: real annual $ for research + faculty workshops]
            data: [10000, 40000, 110000],
            backgroundColor: C.greenD,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            grid: { color: C.rule },
            ticks: { callback: (v) => '$' + (v / 1000) + 'k' },
          },
        },
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()} [placeholder]`,
            },
          },
        },
      },
    });
  });

  // 4. Failure to Act — peer adoption curve vs Babson (line).
  on('chart-failure-curve', (el) => {
    new Chart(el, {
      type: 'line',
      data: {
        labels: ['2023', '2024', '2025', '2026', '2027 (proj.)'],
        datasets: [
          {
            label: 'Peer schools (avg.)',
            // [PLACEHOLDER: real avg % of peer entrepreneurship programs with institutional AI partnerships]
            data: [8, 22, 48, 70, 85],
            borderColor: C.green,
            backgroundColor: 'rgba(0,103,71,0.10)',
            tension: 0.35,
            fill: true,
            pointRadius: 4,
          },
          {
            label: 'Babson (current pace)',
            // [PLACEHOLDER: replace with Babson's actual current and projected adoption]
            data: [5, 10, 18, 25, 35],
            borderColor: C.amberD,
            backgroundColor: 'rgba(154,124,27,0.10)',
            borderDash: [6, 4],
            tension: 0.35,
            fill: true,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true, max: 100,
            grid: { color: C.rule },
            ticks: { callback: (v) => v + '%' },
          },
        },
        plugins: { legend: { position: 'bottom' } },
      },
    });
  });

  // 5. Benchmarks — peer-school AI investment leaderboard (horizontal bar).
  on('chart-benchmarks', (el) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: [
          'Stanford GSB',
          'MIT Sloan',
          'Harvard Business School',
          'Wharton (Penn)',
          'Babson (current)',
          'Northeastern',
          'Bentley',
        ],
        datasets: [{
          label: 'Student-facing AI investment ($, annual)',
          // [PLACEHOLDER: real or directionally accurate per-school student-facing AI investment figures]
          data: [4500000, 3800000, 3200000, 2400000, 350000, 1100000, 700000],
          backgroundColor: (ctx) => ctx.label === 'Babson (current)' ? C.amber : C.green,
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: C.rule },
            ticks: { callback: (v) => '$' + (v / 1000000).toFixed(1) + 'M' },
          },
          y: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `$${ctx.parsed.x.toLocaleString()} [placeholder]`,
            },
          },
        },
      },
    });
  });
})();

/* ============================================================
   Chart.js configs for v2 — two charts only.
   ALL DATA VALUES ARE PLACEHOLDERS. Replace with verified
   numbers before this brief is shared externally.
   ============================================================ */

(function () {
  if (typeof Chart === 'undefined') return;

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

  Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  Chart.defaults.font.size = 13;
  Chart.defaults.color = C.ink;
  Chart.defaults.borderColor = C.rule;
  Chart.defaults.plugins.legend.labels.boxWidth = 14;

  function on(id, fn) {
    const el = document.getElementById(id);
    if (el) fn(el);
  }

  // Home — share of founder tool use across frontier labs.
  on('chart-home-share', (el) => {
    new Chart(el, {
      type: 'doughnut',
      data: {
        labels: ['Anthropic', 'OpenAI', 'Google (Gemini)', 'Other / none'],
        datasets: [{
          // [PLACEHOLDER: real distribution from verified usage survey or aggregated data]
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

  // Partnership — cost by tier × use case.
  on('chart-costs', (el) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Pilot', 'Department', 'Institution'],
        datasets: [
          {
            label: 'Student API access',
            // [PLACEHOLDER: annual $ for student API access at each tier]
            data: [15000, 60000, 180000],
            backgroundColor: C.green,
          },
          {
            label: 'Classroom seats',
            // [PLACEHOLDER: annual $ for classroom seats]
            data: [8000, 32000, 90000],
            backgroundColor: C.amber,
          },
          {
            label: 'Faculty + research',
            // [PLACEHOLDER: annual $ for faculty PD + research compute]
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
})();

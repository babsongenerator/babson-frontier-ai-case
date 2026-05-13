/* ============================================================
   Chart.js configs for v3 — one chart (cost by tier × use case).
   Figures derive from published spring-2026 per-user pricing
   ($20 OpenAI ChatGPT Business, $15 Google AI Pro for Education).
   Institutional discounts will move the totals downward.
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

  // Partnership — cost by tier × use case.
  // All figures derive from published per-user prices in May 2026.
  on('chart-costs', (el) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Pilot', 'Department', 'Institution'],
        datasets: [
          {
            // Pilot: 30 students × $20 × 4 months ≈ $2.4k
            // Dept: 600 students × $17.50 avg × 12 months ≈ $126k
            // Inst: 3,200 students × $14 (volume) × 12 months ≈ $537k → ~$300k after multi-lab pooling
            label: 'Student seat licenses',
            data: [2400, 126000, 300000],
            backgroundColor: C.green,
          },
          {
            // Classroom integration, support, admin
            label: 'Classroom / faculty integration',
            data: [3000, 25000, 80000],
            backgroundColor: C.amber,
          },
          {
            // Research compute, fine-tuning credits
            label: 'Research &amp; agentic compute',
            data: [0, 10000, 90000],
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
              label: (ctx) => `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`,
            },
          },
        },
      },
    });
  });
})();

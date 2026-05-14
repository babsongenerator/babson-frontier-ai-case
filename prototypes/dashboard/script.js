// ---- ANIMATED KPI COUNTERS ----
function animateCount(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  if (isNaN(target)) return;
  const duration = 900;
  const start = performance.now();
  const startVal = 0;
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = startVal + (target - startVal) * eased;
    el.textContent = target >= 100 ? Math.round(v).toLocaleString() : (Number.isInteger(target) ? Math.round(v) : v.toFixed(1));
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target >= 100 ? target.toLocaleString() : target;
  }
  requestAnimationFrame(tick);
}

// ---- INTERSECTION OBSERVER FOR FADE-IN + COUNTER TRIGGER ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      entry.target.querySelectorAll('[data-count]').forEach(animateCount);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.kpi, .provider, .card, .matrix-wrap').forEach(el => {
  el.classList.add('fade-in');
  io.observe(el);
});

// Run counters on KPI immediately if already in view
document.querySelectorAll('.kpi [data-count]').forEach(el => {
  const r = el.getBoundingClientRect();
  if (r.top < window.innerHeight) animateCount(el);
});

// ---- PROVIDER TAB FILTER ----
const tabs = document.querySelectorAll('.tab');
const providers = document.querySelectorAll('.provider');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const k = tab.dataset.tab;
    providers.forEach(p => {
      if (k === 'all' || p.dataset.provider === k) p.classList.remove('dimmed');
      else p.classList.add('dimmed');
    });
  });
});

// ---- RAIL ACTIVE STATE ON SCROLL ----
const railLinks = document.querySelectorAll('.rail-link');
const sectionsForNav = ['overview','providers','cost','adoption','timeline','references']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function updateActiveRail() {
  const y = window.scrollY + 140;
  let current = sectionsForNav[0];
  for (const s of sectionsForNav) {
    if (s.offsetTop <= y) current = s;
  }
  railLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', updateActiveRail, { passive: true });

// ---- CHARTS ----
const ink = '#0f1419';
const muted = '#5a6470';
const line = '#e6e8eb';
const babson = '#006747';
const cOpenAI = '#10a37f';
const cAnthropic = '#c66a3f';
const cGoogle = '#4285f4';

Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
Chart.defaults.font.size = 11.5;
Chart.defaults.color = muted;

// PRICE CHART
const priceCtx = document.getElementById('priceChart');
if (priceCtx) {
  new Chart(priceCtx, {
    type: 'bar',
    data: {
      labels: ['OpenAI ChatGPT Edu', 'Anthropic Claude Edu', 'Google AI Pro for Edu'],
      datasets: [{
        label: 'USD / user / month',
        data: [20, 18, 15],
        backgroundColor: [cOpenAI, cAnthropic, cGoogle],
        borderRadius: 3,
        barThickness: 38,
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: ink,
          titleFont: { size: 12, weight: '600' },
          bodyFont: { family: "'JetBrains Mono', monospace", size: 11 },
          padding: 10,
          cornerRadius: 4,
          displayColors: false,
          callbacks: {
            label: ctx => `$${ctx.parsed.x} / user / mo`,
            afterLabel: ctx => {
              if (ctx.dataIndex === 1) return 'Anthropic: typically negotiated';
              return '';
            }
          }
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 25,
          grid: { color: line, drawBorder: false },
          ticks: {
            font: { family: "'JetBrains Mono', monospace", size: 10.5 },
            callback: v => '$' + v,
          },
        },
        y: {
          grid: { display: false, drawBorder: false },
          ticks: { font: { size: 11.5 }, color: ink },
        }
      },
    }
  });
}

// TIMELINE CHART (cumulative peer deployments)
const tlCtx = document.getElementById('timelineChart');
if (tlCtx) {
  // Quarters 2024 Q2 through 2026 Q2
  const labels = ['24-Q2','24-Q3','24-Q4','25-Q1','25-Q2','25-Q3','25-Q4','26-Q1','26-Q2'];
  // Cumulative announced peer deployments per provider from sources 11-20
  const openai     = [1, 1, 2, 2, 2, 2, 2, 2, 2];      // Wharton (24Q2), UCLA (24Q3), CSU(25Q1), Oxford(25Q3)
  const openaiCum  = [1, 2, 2, 2, 2, 3, 4, 4, 4];
  const anthropic  = [0, 0, 0, 1, 2, 2, 3, 3, 3];      // Champlain(25Q1), Northeastern(25Q2), LSE(25Q2)
  const google     = [0, 0, 0, 0, 0, 1, 1, 1, 2];      // Rice(25Q3), Houston(26Q1)

  new Chart(tlCtx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'OpenAI',
          data: openaiCum,
          borderColor: cOpenAI,
          backgroundColor: cOpenAI + '22',
          tension: 0.3,
          fill: false,
          borderWidth: 2.2,
          pointBackgroundColor: cOpenAI,
          pointRadius: 3,
          pointHoverRadius: 5,
        },
        {
          label: 'Anthropic',
          data: anthropic,
          borderColor: cAnthropic,
          backgroundColor: cAnthropic + '22',
          tension: 0.3,
          fill: false,
          borderWidth: 2.2,
          pointBackgroundColor: cAnthropic,
          pointRadius: 3,
          pointHoverRadius: 5,
        },
        {
          label: 'Google',
          data: google,
          borderColor: cGoogle,
          backgroundColor: cGoogle + '22',
          tension: 0.3,
          fill: false,
          borderWidth: 2.2,
          pointBackgroundColor: cGoogle,
          pointRadius: 3,
          pointHoverRadius: 5,
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8,
            font: { family: "'JetBrains Mono', monospace", size: 11 },
            color: ink,
          }
        },
        tooltip: {
          backgroundColor: ink,
          titleFont: { size: 11, family: "'JetBrains Mono', monospace" },
          bodyFont: { size: 12 },
          padding: 10,
          cornerRadius: 4,
        }
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: {
            font: { family: "'JetBrains Mono', monospace", size: 10.5 },
            color: muted,
          },
          title: {
            display: true,
            text: 'Quarter',
            font: { family: "'JetBrains Mono', monospace", size: 10 },
            color: muted,
            padding: { top: 6 },
          },
        },
        y: {
          beginAtZero: true,
          grid: { color: line, drawBorder: false },
          ticks: {
            font: { family: "'JetBrains Mono', monospace", size: 10.5 },
            stepSize: 1,
          },
          title: {
            display: true,
            text: 'Cumulative peer deployments',
            font: { family: "'JetBrains Mono', monospace", size: 10 },
            color: muted,
          },
        }
      }
    }
  });
}

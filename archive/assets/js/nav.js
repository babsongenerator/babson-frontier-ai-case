// Mobile nav toggle + active-link highlight.
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mark active page by matching pathname.
  const here = window.location.pathname.replace(/\/+$/, '/') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('data-route');
    if (!href) return;
    if (href === here) a.setAttribute('aria-current', 'page');
  });
})();

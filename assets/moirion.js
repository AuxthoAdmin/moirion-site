document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && header && nav) {
    toggle.addEventListener('click', () => {
      const next = !header.classList.contains('is-open');
      header.classList.toggle('is-open', next);
      toggle.setAttribute('aria-expanded', String(next));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // A direct setup link should reveal its content, including after Back/Forward.
  const revealCompatibility = () => {
    if (window.location.hash !== '#compatibility') return;
    const details = document.getElementById('compatibility');
    if (details instanceof HTMLDetailsElement) details.open = true;
  };
  revealCompatibility();
  window.addEventListener('hashchange', revealCompatibility);

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && header && nav) {
    nav.id = nav.id || 'site-navigation';
    toggle.setAttribute('aria-controls', nav.id);

    const setOpen = (open) => {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', () => {
      setOpen(!header.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setOpen(false);
      });
    });

    header.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
        event.preventDefault();
      }
    });
  }
});

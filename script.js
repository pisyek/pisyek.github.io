/* Nav, mobile menu, scrollspy, reveal, copy email. */
(() => {
  const header = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-nav');
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

  /* --- Mobile menu ----------------------------------------------------- */
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    header.dataset.open = String(open);
    document.body.classList.toggle('menu-open', open);
  };

  toggle?.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (header?.dataset.open === 'true' && !header.contains(event.target)) setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && header?.dataset.open === 'true') setMenu(false);
  });

  /* --- Nav state + scrollspy ------------------------------------------- */
  let queued = false;
  const sections = [...document.querySelectorAll('main section[id]')].filter((section) =>
    navLinks.some((link) => link.hash === `#${section.id}`)
  );

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);

    const marker = window.scrollY + 140;
    let current = null;
    for (const section of sections) {
      if (section.offsetTop <= marker) current = section.id;
    }
    for (const link of navLinks) {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  };

  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(onScroll);
  }, { passive: true });
  onScroll();

  /* --- Scroll reveal ---------------------------------------------------- */
  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 70}ms`);
      observer.observe(item);
    });
  }

  /* --- Copy email -------------------------------------------------------- */
  const copyButton = document.querySelector('[data-copy]');
  const copyStatus = document.getElementById('copy-status');

  copyButton?.addEventListener('click', async () => {
    const value = copyButton.dataset.copy;
    let copied = false;
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch {
      const field = document.createElement('textarea');
      field.value = value;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      copied = document.execCommand('copy');
      field.remove();
    }
    if (!copied) return;

    const label = copyButton.querySelector('span');
    copyButton.classList.add('is-copied');
    if (label) label.textContent = 'Copied';
    if (copyStatus) copyStatus.textContent = `${value} copied to clipboard.`;
    window.setTimeout(() => {
      copyButton.classList.remove('is-copied');
      if (label) label.textContent = 'Copy email';
    }, 2200);
  });

  /* --- Year -------------------------------------------------------------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

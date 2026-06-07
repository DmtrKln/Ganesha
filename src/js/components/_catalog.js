const OPEN_CLASS = 'catalog__aside--open';

document.querySelectorAll('.catalog__toggle').forEach((toggle) => {
  const aside = toggle.closest('.catalog__aside');
  if (!aside) return;

  toggle.addEventListener('click', () => {
    const isOpen = aside.classList.toggle(OPEN_CLASS);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

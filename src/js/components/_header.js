const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile');
const menuLinks = document.querySelectorAll('.header__mobile a');
const SCROLLED_CLASS = 'scrolled';
const ACTIVE_CLASS = 'active';

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY >= 10);
  });
}

const closeMenu = () => {
  burger?.classList.remove(ACTIVE_CLASS);
  mobileMenu?.classList.remove(ACTIVE_CLASS);
  document.body.classList.remove('overflow');
};

burger?.addEventListener('click', () => {
  burger.classList.toggle(ACTIVE_CLASS);
  mobileMenu?.classList.toggle(ACTIVE_CLASS);
  document.body.classList.toggle('overflow');
});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


const categories = document.querySelector('.catalog__categories');
const button = document.querySelector('.catalog__toggle');


button.addEventListener('click', () => {
  categories.classList.toggle('active');
})
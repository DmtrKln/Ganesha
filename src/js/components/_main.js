const cardsAbout = document.querySelectorAll('.about__card');

const cards = () => {
  cardsAbout.forEach((card, index) => {
    if (index % 2 === 1) {
      card.style.backgroundColor = '#78b473';
    }
  });
};

cards();

// const reservationSwiper = new Swiper(".reservation__slider", {

//   slidesPerView: 1,
//   spaceBetween: 20,
//   speed: 800,
//   watchSlidesProgress: true,


//   navigation: {
//     prevEl: ".reservation__arrowLeft",
//     nextEl: ".reservation__arrowRight",
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },

//   },


// });
const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 60,

  on: {
    init() {
      updateSlides(this);
    },
    slideChangeTransitionEnd() {
      updateSlides(this);
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function updateSlides(swiper) {
  swiper.slides.forEach(slide => {
    slide.style.transform = 'scale(1)';
  });

  swiper.slides[swiper.activeIndex].style.transform = 'scale(1.13)';
}
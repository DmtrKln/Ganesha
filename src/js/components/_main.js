const cardsAbout = document.querySelectorAll('.about__card');

const cards = () => {
  cardsAbout.forEach((card, index) => {
    if (index % 2 === 1) {
      card.style.backgroundColor = '#78b473';
    }
  });
};

cards();

const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 60,

  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },

  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  
});



const catalogPreview = new Swiper(".catalogPreview__slider", {

  slidesPerView: 1.3,
  spaceBetween: 20,
  speed: 800,
  watchSlidesProgress: true,
  loop: true,


  breakpoints: {

    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 2.3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

  },


});

Fancybox.bind("[data-fancybox]", {
  Carousel: {
    Panzoom: {
      click: "close",
      clickOutside: "close",
    },
  },
});




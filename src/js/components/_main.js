import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const slider = document.querySelector('.reviews-slider');

if (slider) {
  const updateSlides = swiper => {
    swiper.slides.forEach(slide => {
      slide.style.transform = 'scale(1)';
    });

    if (swiper.slides[swiper.activeIndex]) {
      swiper.slides[swiper.activeIndex].style.transform = 'scale(1.13)';
    }
  };

  new Swiper(slider, {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.goods__swiperPagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
    on: {
      init() {
        updateSlides(this);
      },
      slideChangeTransitionEnd() {
        updateSlides(this);
      },
    },
  });
}

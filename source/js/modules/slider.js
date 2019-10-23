(function () {
  let slider = document.querySelector(`.slider`);

  if (!slider) {
    return;
  }

  let swiperDesktop;
  let swiperMobile;
  let size = 40;
  const START_SIZE = 40;
  const DESKTOP_WIDTH = 1280;

  // Скейлинг расстояния между слайдами
  function calcSpaceBetween() {
    if (window.matchMedia(`(min-width: 1280px)`).matches) {
      size = (screen.width * START_SIZE) / DESKTOP_WIDTH;
      swiperDesktop.params.spaceBetween = size;
      swiperDesktop.update();
    }
  }

  // Слайдер на десктопе
  function initSlider() {
    if (window.matchMedia(`(min-width: 768px)`).matches) {
      if (swiperDesktop === undefined) {
        swiperDesktop = new window.Swiper(`.slider .swiper-container`, {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 40,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          pagination: {
            el: `.slider .swiper-pagination`,
            clickable: true,
          },
          navigation: {
            nextEl: `.slider .swiper-button-next`,
            prevEl: `.slider .swiper-button-prev`,
          },
          breakpoints: {
            1279: {
              slidesPerView: 2,
            },
          }
        });
      }

      if (swiperMobile !== undefined) {
        swiperMobile.destroy();
        swiperMobile = undefined;
      }

      swiperDesktop.el.style.opacity = 1;
    } else {
      if (swiperDesktop !== undefined) {
        swiperDesktop.destroy();
        swiperDesktop = undefined;
      }

      if (swiperMobile === undefined) {
        swiperMobile = new window.Swiper(`.slider .swiper-container`, {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 16,
          centeredSlides: true,
          loop: true,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          pagination: {
            el: `.slider .swiper-pagination`,
            clickable: true,
          },
        });
      }

      swiperMobile.el.style.opacity = 1;
    }
    calcSpaceBetween();
  }

  initSlider();

  window.addEventListener(`resize`, function () {
    initSlider();
  });

})();

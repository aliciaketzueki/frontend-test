(function () {
  let slider = document.querySelector(`.slider`);

  if (!slider) {
    return;
  }

  let swiperDesktop = undefined;
  let swiperMobile = undefined;

  // Слайдер на десктопе
  function initSlider () {
    if (window.matchMedia(`(min-width: 768px)`).matches) {
      if (swiperDesktop == undefined) {
        swiperDesktop = new Swiper('.slider .swiper-container', {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 40,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          pagination: {
            el: '.slider .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.slider .swiper-button-next',
            prevEl: '.slider .swiper-button-prev',
          },
          breakpoints: {
            1279: {
              slidesPerView: 2,
            },
          }
        });
      }

      if (swiperMobile != undefined) {
        swiperMobile.destroy();
        swiperMobile = undefined;
      }
    } else if (window.matchMedia(`(max-width: 767px)`).matches) {
      if (swiperDesktop != undefined) {
        swiperDesktop.destroy();
        swiperDesktop = undefined;
      }

      if (swiperMobile == undefined) {
        swiperMobile = new Swiper('.slider .swiper-container', {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 16,
          centeredSlides: true,
          loop: true,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          pagination: {
            el: '.slider .swiper-pagination',
            clickable: true,
          },
        });
      }
    }
  }

  initSlider();

  window.addEventListener(`resize`, function () {
    initSlider();
  });

})();

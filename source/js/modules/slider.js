(function () {
  let slider = document.querySelector(`.slider`);

  if (!slider) {
    return;
  }

  let swiper = new Swiper('.slider .swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 40,
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
        //spaceBetween: 30
      },

      375: {
        //slidesPerView: 2,
        //spaceBetween: 20
      },
      // when window width is >= 480px
      
      // when window width is >= 640px
    }
  });

})();

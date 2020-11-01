$(document).ready(function() {
  firstMotion();
});


var thumbSwiper = new Swiper(".thumb-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".thumb-next",
    prevEl: ".thumb-prev",
  },
  loop: true,
  // autoplay: true
});

var popupSwiper = new Swiper(".popup-swiper-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".popup-next",
    prevEl: ".popup-prev",
  },
  loop: true
});


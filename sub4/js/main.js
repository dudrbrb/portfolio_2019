var swiper = new Swiper(".swiper-container", {
  speed: 560,
  mousewheel: true,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


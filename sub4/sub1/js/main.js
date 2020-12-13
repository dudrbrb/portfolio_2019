var swiper = new Swiper(".swiper-container", {
  speed: 560,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (idx, className) {
      return '<span class="' + className + '"><img src="img/btn/' + (idx + 1) +'.png"></span>';
    }
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


window.onload = function(){
  var swiperSlide = document.querySelectorAll('.swiper-slide');
  swiperSlide.forEach(function(e, idx){
    e.style.background = "url(img/bg/"+ (idx + 1) +".png)"
  }); 

}
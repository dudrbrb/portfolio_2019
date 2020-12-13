window.onload = function(){
  makeBG() 
}

var swiper = new Swiper(".swiper-container", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

function makeBG(){
  var swiperSlide = document.querySelectorAll('.swiper-slide');
  swiperSlide.forEach(function(e, idx){
    e.style.background = "url(img/bg/"+ (idx + 1) +".png)"
  }); 
}
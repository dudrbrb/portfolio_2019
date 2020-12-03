$(window).on('load',function(){
  swiperInit();
})

function swiperInit() {
  slideMoveStart();
  slideMoveEnd();

  mySwiper.slideToLoop(getSwiperhashIndex(document.location.hash), 0);
  botActive();
}


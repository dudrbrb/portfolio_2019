var mySwiper = new Swiper('.swiper-container', {
    autoHeight:true,
    hashNavigation: {
        replaceState: true,
        watchState: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

mySwiper.on("slideChangeTransitionStart", slideMoveStart);
mySwiper.on("slideChangeTransitionEnd", slideMoveEnd);

var scrollTl = new TimelineMax();
function scrollUp() {
    scrollTl.to('body,html', 0.4, {
            scrollTop: 0,
            ease: Power2.easeInOut,
            onComplete: motionStart
        })
}

function slideMoveStart(){
  motionreset();
  scrollTl.clear();
}
  
function slideMoveEnd() {
  scrollUp();
  botActive();
  youtubeStop();
}
  
  
function youtubeStop(){
	if ('iframe') {
		$("iframe").each(function() {
		this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		});
  }
  // var video = $('video').get(0)
  // video.pause(); 
}

function botActive(){
    var idx = Number($(".swiper-slide-active").attr("data-hash").substring(3,4))
    // 하단 네비
      $('.navi ul li').removeClass('active');
      $('.navi ul li:nth-child('+(idx+1)+')').addClass('active');

      if( idx === 3){
      $('.navi ul li').removeClass('active');

      }
}  
  

function motionStart() {
  TweenMax.killTweensOf('img')
  var idx = mySwiper.realIndex;
  motionArray(idx);
}




  /**
 * url 에서 hash 값을 가져와서, 스와이퍼 내에 해당 해시값과 일치하는 페이지의 인덱스값 리턴
 * @param hashStr    url 에서 추출한 해시값
 * @returns {number}
 */
function getSwiperhashIndex(hashStr) {
    // 해쉬값이 없거나, 정의되지 않은 경우 지정된 페이지로 강제 이동
    if (hashStr == "" || typeof hashStr == "undefined")
      document.location.href = document.location.href + "#sub1";
    // 해쉬값이 존재하는 경우
    else {
      var swiperTotal = mySwiper.slides.length;
      for (var i = 0; i < swiperTotal; i++) {
        // 스와이퍼의 각 슬라이드 data-hash 값을 조회해서, url에서 추출된 해시값과 일치하는 index 검색
        var hashName = "#" + $(mySwiper.slides[i]).attr("data-hash");
        if (hashName == hashStr) return mySwiper.realIndex;
   
      }
    }
  }



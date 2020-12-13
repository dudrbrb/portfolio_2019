// mian swiper
var naviArr  =['', '익선동의 역사','인선동의 옛 흔적','익선동의 명소','후기 & 오시는 길']

var mainSwiper = new Swiper(".main-swiper", {
    direction: 'vertical',
    slidesPerView: 1,
    speed: 560,
    mousewheel: true,
    pagination: {
        el: '.main-pagi',
        clickable: true
    },
    on:{
      slideChange : mainPagi
    }
});

var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: true
});

var swiper1Nav = new Swiper(".swiper1-nav", {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop:true,
  autoplay: true
});

swiper1.controller.control = swiper1Nav;
swiper1Nav.controller.control = swiper1;

swiper1.snapGrid[swiper1.snapGrid.length - 1] = swiper1.slidesGrid[swiper1.slidesGrid.length - 1];

function maingBgSet(){
  var swiperSlide = document.querySelectorAll('.main-wrapper > .swiper-slide');
  swiperSlide.forEach(function(e){ 
    e.style.background = "url(img/"+ (mainSwiper.realIndex + 1) +"/bg.png)"
    mainSwiper.realIndex++
  }); 
}

function mainPagi(){
  var idx = this.realIndex,
  bullets = this.pagination.bullets,
  activeBullet = this.pagination.bullets[idx];

  [].forEach.call(bullets, function(e){ 
   e.innerHTML = "";
  });
  
  if(idx == 2 || idx==3) {
    [].forEach.call(bullets, function(e){ 
      e.style.background = "#3d352e";
      e.style.color = "#3d352e";
    })
  }else{
    [].forEach.call(bullets, function(e){ 
      e.style.background = "#f0e8d9";
      e.style.color = "#f0e8d9";
    })
  } 

  activeBullet.innerHTML = naviArr[idx];
  activeBullet.style.background ="none";
}

function addClass(e, c) {
    e.classList.add(c);
    return e;
};

function removeClass(e, c) {
    e.classList.remove(c);
    return e;
};

function getElementIndex(e, range) {
    if (!!range) return [].indexOf.call(e, range);
    return [].indexOf.call(e.parentNode.children, e);
}


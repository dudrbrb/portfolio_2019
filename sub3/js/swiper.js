// mian swiper
var naviArr  =['', '익선동의 역사','인선동의 옛 흔적','익선동의 명소','후기 & 오시는 길']
var sub1Contents  ={
    0:{year: '1920', text: '서민층을 위한<br>실용적인 근대식 한옥'},
    1:{year: '1950', text: '많은 요정이 자리한<br>향락가로'},
    2:{year: '2004', text: '계속된 재개발 바람<br>"도저히 살 수 없는 집"'},
    3:{year: '2009', text: '작은 찻집이 만든<br>골목의 새로운 시작'},
    4:{year: '2016', text: '골목의 딜레마를<br>딛고 일어서다'},
    5:{year: '2019', text: '한번쯤 가봐야하는<br>서울의 명소로'}
};

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
    on:{
        slideChange : swiper1PagiAct
    }
});

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


function makePagi1(){
    var pagi = document.querySelector('.pagi1'),
        swiperSlide = document.querySelectorAll('.swiper1-wrapper > .swiper-slide');

    swiperSlide.forEach(function(e, idx){ 
      var pagiText =  '<div>'+ sub1Contents[idx].year +'<span></span>'+ sub1Contents[idx].text +'</div>';
      pagi.innerHTML += pagiText;
    }); 
}

// 익선동의 역사 클릭 이벤트
var activePagies = document.querySelectorAll('.pagi1 div');
function swiper1Pagi(){
  [].forEach.call(activePagies, function(e){ 
    e.addEventListener("click", function(){
      var idx = getElementIndex(activePagies, e) + 1;
      var slideImgs = document.querySelectorAll('.swiper1-wrapper .swiper-slide img');
      var slideImg = document.querySelector('.swiper1-wrapper .swiper-slide:nth-child(' + idx + ') img');
      [].forEach.call(activePagies, function(e){ 
          e.classList.remove('on');
          swiper1.slideTo(idx-1);
          [].forEach.call(slideImgs, function(e){ 
              e.style.filter = 'grayscale(1)'
          })
      });
      slideImg.style.filter = 'grayscale(0)'
      addClass(e, 'on');
      console.log(slideImg)
   }, false); 
  });
}

function swiper1PagiAct(){
    var idx = this.realIndex + 1;
    var slideImgs = document.querySelectorAll('.swiper1-wrapper .swiper-slide img');
     
    var slideImg = document.querySelector('.swiper1-wrapper .swiper-slide:nth-child(' + idx + ') img');
    var pagi = document.querySelector('.pagi1 div:nth-child(' + idx +')');
    var pagiRemove = document.querySelectorAll('.pagi1 div:not(:nth-child(' + idx +'))');
    [].forEach.call(pagiRemove, function(e){ 
        e.classList.remove('on');
        return e;
    });
    addClass(pagi, 'on');
    [].forEach.call(slideImgs, function(e){ 
        e.style.filter = 'grayscale(1)'
    })
    slideImg.style.filter = 'grayscale(0)';
    
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
$(document).ready(function() {
  firstMotion();
  if(getCookie('intro')){
    $('.intro-popup').hide();
  }
});

// graphic swiper
var thumbSwiper = new Swiper(".thumb-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".thumb-next",
    prevEl: ".thumb-prev",
  },
  observer: true,
  observeParents: true,
});

var popupSwiper = new Swiper(".popup-swiper-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".popup-next",
    prevEl: ".popup-prev",
  },
  observer: true,
  observeParents: true,
});


// mobile web swiper

var mbIdx,
    menuTxt, 
    title,
    subTitle,
    text,
    mbContents =[{
      '현대캐피탈 중년 자격증':{
        title : '현대캐피탈 중년 자격증',
        subTitle : 'Swiper | TweenMax',
        text : '현재 보여지는 스와이프에 따라 실행되는 모션 페이지<br>'+
        '보여지지 않는 스와이프에서도 모션 실행이 진행되면 로딩이 길어지고<br>'+
        '실제 눈으로도 보여지기 때문에, 현재 스와이프의 realIndex값을 불러와<br>'+
        'flag와 매치하여 모션을 실행하게 셋팅했다.<br>'+
        '또한, 공통 모션이 많은 페이지여서, 첫 페이지와 마지막 페이지를 제외한<br>'+
        '서브 페이지에서는 하나의 함수로 실행되고 있다.'
      },
      '롯데백화점 OUTER 투표 이벤트':{
        title : '롯데백화점 OUTER 투표 이벤트',
        subTitle : 'Ajax | TweenMax',
        text : '롯데백화점 앱 회원이 참여할 수 있는 2020 아우터 투표 이벤트<br>'+
        'Ajax로 api와 통신하여 실제로 회원들이 투표하고,<br>'+
        '그 투표율을 실시간으로 보여주고 있다.<br>'+
        '사용자가 선택한 값과 총 값에서 이기고 있는 상품에 따라<br>'+
        '모션과 버튼 랜딩 링크가 변경된다.'
      },
      '롯데백화점 하이틴 재질 테스트':{
        title : '롯데백화점 하이틴 재질 테스트',
        subTitle : 'Ajax | Swiper | TweenMax | Kakao share',
        text : '<span>네이버 10대 실시간 인기 검색어 1위</span>를 한 MBTI기반 성향 테스트<br>'+
        '사용자가 값을 선택할 때 마다 배열에 결과를 축적하고,<br>'+
        '최종 페이지에서 결과에 맞는 화면을 보여준다.<br>'+
        '만약 동점인 결과가 나온다면 이미 정해진 우선순위에 따라<br>'+
        '한가지 결과만 보여주게 셋팅했다.'
      },
      '이랜드 모바일 매거진':{
        title : '이랜드 모바일 매거진',
        subTitle : 'Swiper | TweenMax | ScrollMagic | Inline Video',
        text : '스와이프 페이지 안에서, TweenMax와 ScrollMagic을 동시에 사용한 페이지<br>'+
        '스와이프의 hash값을 가져와서 하단의 네비가 활성화 되고 있고,<br>'+
        '페이지 중간 중간에는 영상이 inline으로 실행되도록 셋팅했다.'
      },
      '미래에셋페이 베타테스터 참여 폼':{
        title : '미래에셋페이 베타테스터 폼',
        subTitle : 'Only JS | Input check | Ajax',
        text : 'Ajax통신을 통해 진행된 이벤트.<br>'+
        '가능한 jquery를 사용하지 않으며 작업했다.'
      },
      'SK MAGIC TIP':{
        title : 'SK MAGIC TIP',
        subTitle : 'TweenMax | ScrollMagic',
        text : '단페이지 안에서 TweenMax와 ScrollMagic을 동시에 사용한 페이지<br>'+
        '아코디언처럼 접혔다 펴지는 컨텐츠가 있다. '
      },
      'SK MAGIC LOVE':{
        title : 'SK MAGIC LOVE',
        subTitle : 'Ajax | Swiper | TweenMax',
        text : '질문에 답을 해야 다음 스와이프가 활성화 되는 페이지. <br>'+
        '선택한 값은 Ajax통신을 통해 누적되고, 실제 투표율을 보여주고 있다.'
      },
      'GSMBIZ 자동차 모션':{
        title : 'TweenMax Duration | ScrollMagic',
        subTitle : '자동차 모션',
        text : 'ScrollMagic을 통해 스크롤을 따라 내려오는 자동차 모션 구현 <br>'+
        '기존에 사용하던 방식과 다르게 duration과 진행 속도를 이용하여 <br>'+
        '안정적인 모션을 구현했다.'
      },
    }];

mbContents.forEach(function(ele){
  var mbSubSwiper = document.querySelector('.mbSubSwiper');
  menuTxt = Object.keys(ele);

  menuTxt.forEach(function(ele2){
    var swiperSlide = '<div class="swiper-slide">' +
        '<h3>'+ mbContents[0][ele2].title +'</h3>' +
        '<h4>'+ mbContents[0][ele2].subTitle +'</h4>' +
        '<p>'+ mbContents[0][ele2].text +'</p>' +
        '<div class="mb_link_btn">Go Link</div>'
      '</div>';

    mbSubSwiper.innerHTML += swiperSlide;
  });
});

var mobileSwiper = new Swiper(".mobile-swiper-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  on:{
    slideChangeTransitionEnd : function(){
       mbIdx = this.realIndex;
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (idx, className) {
      return '<span class="' + className + '">' + menuTxt[idx] +'</span>';
    }
  }
});

var mbSubSwiper = new Swiper(".mbSub-swiper-container", {
  slidesPerView: 1,
  loop: true
});

mobileSwiper.controller.control = mbSubSwiper;
mbSubSwiper.controller.control = mobileSwiper;

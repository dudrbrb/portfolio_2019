var idx,
    subIdx;

var link,
    goLink,
    subLink;

$('.top_nav li').on('click', function(e){
    var target = $($(this).attr('href')); 
    
    $('html, body').animate({
        scrollTop: target.offset().top
    },600);
    
    e.preventDefault();
});

$(".link_btn").on("click" , function(){
    $(this).toggleClass("on");
    
    idx = $(this).index(".link_btn") + 1;
    link = "../sub" + idx;

    if($(".link_btn").hasClass("on")){   
        TweenMax.staggerTo(".link" + idx + " div", 0.3, {x: 0, opacity : 1}, 0.1);
    }else{
        TweenMax.staggerTo(".link" + idx + " div", 0.3, {x: -40, opacity : 0}, 0.1);
    }
});

$(".link div").on("click", function(){
    subIdx = $(this).index();
    subLink = "/sub" + subIdx;
    
    subIdx == 0 ? goLink = link + "/index.html" : goLink = link + subLink + "/index.html";

    goLink == '../sub1/sub1/index.html' ? alert('준비중입니다') : window.open(goLink, '_self');
});

var mbLink = [
  "../licence/index.html",
  "../2020outer/index.html",
  "../highteen_test/index.html",
  "../eland/index.html",
  "../miraepay/index.html",
  "../skmagic/tip/index.html",
  "../skmagic/love/index.html",
  "http://i-gsmbizrental.com/carwash/sub1/index.html",
];

$('.mbSwiper, .mb_link_btn').on('click', function(){
  if(mbIdx == undefined) mbIdx == 0;
  window.open(mbLink[mbIdx], "_blank");
});


$('.thumb-swiper-container .swiper-slide').on('click', function(){
    var idx = $(this).index()
    $(".gd_popup_wrapper").show();
    popupSwiper.slideTo(idx, 0)
})

$('.gd_popup_close').on('click', function(){
    $(".gd_popup_wrapper").hide();
})
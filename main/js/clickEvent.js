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
    $(".link_btn").removeClass('on');
    $(this).toggleClass('on');
    
    idx = $(this).index(".link_btn") + 1;
    link = "../sub" + idx;

    if(idx == 4 ){
        if($(this).hasClass("on")){ 
            TweenMax.staggerTo(".link div", 0.3, {x: 0, opacity : 1}, 0.1);
        }else{
            TweenMax.staggerTo(".link div", 0.3, {x: -40, opacity : 0}, 0.1);
        }
        return
    }
    window.open(link, '_self')
    console.log(link)
});
$('.link div').on('click', function(){
    var subIdx = $(this).index();
    subIdx == 0 ? link= '../sub4/' : link = '../sub4/sub'+ subIdx
    window.open(link, '_self')
})
var mbLink = [
  "../licence/index.html",
  "../2020outer/index.html",
  "../highteen_test/index.html",
  "../eland/201008/index.html",
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
});

$('.gd_popup_close').on('click', function(){
    $(".gd_popup_wrapper").hide();
});


var checkbox = document.querySelector('#introCheck'),
    introClose = document.querySelector('.introClose');

introClose.addEventListener('click', function(){
    $('.intro-popup').fadeOut();
    console.log(checkbox.checked)
    if(checkbox.checked == true){
        setCookie('intro', false, 1)
    }
})

function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + escape(value) + ";expires=" + date.toUTCString() + ";path=/";
};
  
function getCookie (name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? unescape(value[2]) : null;
};
  

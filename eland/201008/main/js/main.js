$(document).ready(function() {
    setPageUrl("http://edmeland.co.kr", function() {

});
});

// var tl = new TimelineMax();
// var wrapper = document.getElementById("wrapper");
var bg = $("#bg");
var bg2 = $("#bg2");
var img = $(".img");
var title = $("#title");
var title2 = $("#title2");
var more = $(".more1");
var more2 = $(".more2");

// TweenMax.to(wrapper,0.5,{opacity:1});
// tl.to(img,0.8,{opacity:0, yoyo:true, repeat:1, delay:0.5})
//     .set(img,{attr:{src:'img/fashion2.png'}},"-=0.8")
//     .to(img,0.8,{opacity:0, yoyo:true, repeat:1})
//     .set(img,{attr:{src:'img/fashion3.png'}},"-=0.8")
//     .to(title,0.8,{opacity:1});


var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    // autoHeight:true,
    autoplay:{
        delay:800,
    },
    speed:600,
});

var mySwiper2 = new Swiper('.swiper-container2', {
    effect: 'fade',
    // autoHeight:true,
    autoplay:false,
    speed:600,
});

var toggle = false;
$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st > 100 && !toggle) {
        toggle = true;
        mySwiper2.params.autoplay.delay = 1000;
        mySwiper2.autoplay.start();
    }
})

mySwiper.on("transitionStart",swiperEnd);
mySwiper2.on("transitionStart",swiperEnd2);

function swiperEnd(){
    var idx = mySwiper.realIndex;
    if(idx == 2){
        TweenMax.to([bg,title,more],0.8,{opacity:1, delay:0.8, onComplete:function(){
            $(more).on("click",function(){
                window.open("../sub/index.html" + page.getHashUrl()+"#sub1", "_self");
            })
        }});
        mySwiper.autoplay.stop();
    }
}

function swiperEnd2(){
    var idx = mySwiper2.realIndex;
    if(idx == 2){
        TweenMax.to([bg2,title2,more2],0.8,{opacity:1, delay:0.8, onComplete:function(){
            $(more2).on("click",function(){
                window.open("../sub/index.html" + page.getHashUrl()+"#sub2", "_self");

            })
        }});
        mySwiper2.autoplay.stop();
    }
}

// TweenMax.to('.scroll_btn', 0.6, {y: 20, yoyo: true, repeat: -1})

// function swiperAutoStart(){
//     title.attr("src",title.attr("data-src"));
//     mySwiper.autoplay.start();
// }
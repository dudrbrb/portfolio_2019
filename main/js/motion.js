$(window).scroll(function () {
    findPosition();
    
	var st = $(this).scrollTop();
    // console.log(st);

    if(st > 80){
        $("header").addClass("on")
        TweenMax.to(".title", 0.4, {scale: 0.85})
    }else{
        $("header, .top_nav li").removeClass("on")
        TweenMax.to(".title", 0.4, {scale: 1})
    }

    if(st > 6400){
        TweenMax.staggerTo(".bar", 0.6, {scaleX: 1, delay: 0.3}, 0.4)
    }
});

function firstMotion(){
    var tl = new TimelineMax();
  
    tl.to("#preloader", 0.3, {opacity: 0, delay: 0.6})
    .set("#preloader", {display: "none"})
    .set("#wrapper", {height: "auto"})
    .staggerTo(".title > img", 0.4, {y: 0, opacity: 1}, 0.2);   
};

function findPosition(){
    $('section').each(function(){
        if( ($(this).offset().top - $(window).scrollTop() ) < 20){
            $('.top_nav li').removeClass('on');
            $('.top_nav').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('on');
        }
    });
}


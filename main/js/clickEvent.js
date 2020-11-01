var idx,
    subIdx;

var link,
    subLink;

$('.top_nav li').on('click',function(e){
    var target = $($(this).attr('href')); 
    
    $('html, body').animate({
        scrollTop: target.offset().top
    },600);
    
    $(this).addClass('on');
    e.preventDefault();
});

$(".link_btn").on("click" ,function(){
    $(".link_btn").removeClass("on");
    $(this).addClass("on");
    
    idx = $(this).index(".link_btn") + 1;
    link = "../sub" + idx;

    if($(".link_btn").hasClass("on")){   
        TweenMax.staggerTo(".link:not(.link" + idx + ") div", 0.3, {x: -40, opacity : 0}, 0.1);
        TweenMax.staggerTo(".link" + idx + " div", 0.3, {x: 0, opacity : 1}, 0.1);
    }else{
        TweenMax.staggerTo(".link" + idx + " div", 0.3, {x: -40, opacity : 0}, 0.1);
    }
});

$(".link div").on("click", function(){
    subIdx = $(this).index()
    
    if(subIdx == 0) subLink = "/main";
    else subLink = "/sub" + subIdx;

    var goLink = link + subLink + "/index.html"
    console.log(goLink)
    // window.open(link + subLink + "/index.html")
});


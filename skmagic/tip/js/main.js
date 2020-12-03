$(window).on('load',function(){
    Motion();
})

$('.box_btn').on('click', function(){
    var idx = $(this).index('.box_btn') + 1;
    var ht;

    if(idx == 1) ht = 2441
    else if ( idx == 2 ) ht = 2415
    else ht = 2348;

    $('.arr' + idx).toggleClass('on');
    
    if( $('.arr' + idx).hasClass('on') ){
        TweenMax.set($('.arr' + idx), {rotation: 180})
        TweenMax.to(('.box' + idx), 1, {height: ht})
        TweenMax.to(('.box' + idx + ' .top_img'), 0.6, { opacity: 1, delay: 0.4})
    }else{
        TweenMax.set($('.arr' + idx), {rotation: 0})
        TweenMax.to(('.box' + idx), 0.6, {height: 0})
        TweenMax.to(('.box' + idx + ' .top_img'), 0.6, { opacity: 0})
    }
});
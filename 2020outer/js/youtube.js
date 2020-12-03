$(function() {
    //유튜브클릭했었을때 유튜브로드
    $('.videoClick').on('click', function() {
        // window.open('https://www.youtube.com/channel/UCpBkdV5sGB9v80H8XTewtcg?reload=9', '_blank')
        youtubeOnClick($(this).attr('data-idx'));
    });
});
window.onload = function() {
    //이미지 로드가 완료되고 영상 로드를 위함
    var youTubetag = document.createElement('script');
    youTubetag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(youTubetag, firstScriptTag);
    var iframeTotal = $('iframe').length; // 변수 iframeTotal 는 $("iframe") 의 갯수다 (유튜브 영상 개수)
    //console.log("iframeTotal = " + iframeTotal);
};
// 유튜브 클릭 카운팅
function youtubeOnClick(part) {
    youtubeload(part);
    $('#video' + part).css('background', '#000');
    $('#video' + part).css('z-index', '1');
}
// 유튜브관련 코드
var player = [];
function youtubeload(part) {
    var videoIdUrl = ['nPtHx09Juhk'];
    player[part - 1] = new YT.Player('video' + part, {
        width: '460',
        height: '260',
        videoId: videoIdUrl[part - 1],
        playerVars: {
            modestbranding: '1',
            enablejsapi: '1',
            playsinline: '1',
            rel: '0',
            controls: '2',
            autoplay: '1'
        },
        events: {
            onReady: onPlayerReady, // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
            onStateChange: onPlayerStateChange // 플레이어의 상태가 변경될 때마다 실행
        }
    });
}
function onPlayerReady(event) {
    event.target.unMute();
    event.target.playVideo();
}
function onPlayerStop(event) {
    event.target.stopVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    // player.stopVideo();
    // var video = $('video').get(0)
    // video.pause(); 
}

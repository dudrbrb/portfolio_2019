// swiper set
var swiper = new Swiper(".swiper-container", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

var swiperSlide = document.querySelectorAll('.swiper-slide');
swiperSlide.forEach(function(e, idx){
  e.style.background = "url(img/bg/"+ (idx + 1) +".png)";
}); 

// playlist set
var table = document.querySelector('table');
var playList = [
  { id: 1,
    title: 'Spoiler'},
  { id: 2,
    title: 'Dream Girl'}, 
  { id: 3,
    title: 'Punch Drunk Love'},
  { id: 4,
    title: 'Girls, Girls, Girls'},
  { id: 5,
    title: '방백(Aside)'},
  { id: 6,
    title: '아름다워(beautiful)'},
  { id: 7,
    title: '다이너마이트(Dynamite)'},
  { id: 8,
    title: 'Runaway'},
  { id: 9,
    title: 'Dream Girl'}
]

playList.forEach(function(e){
  var list = '<tr>' +
    '<td>'+ e.id +'</td>' +
    '<td>'+ e.title +'</td>' +
    '<td class="music-info"></td>' +
    '<td class="music-lyr"></td>' +
    '<td class="music-lstn"></td>' +
  '</tr>';

  table.innerHTML += list;
});

// music set
var soundOff = document.getElementById('sound-off');
var soundON = document.getElementById('sound-on');
var bgmPath = 'img/2.mp3';
var bgmNowPlaying = false;
var bgm = new Sound('myAudio', bgmPath, 100, true);

window.onload = function() {
    bgm.init();
};


soundOff.addEventListener('click', bgmPlay);
soundON.addEventListener('click', bgmStop);

/**
 * 배경음 플레이
 */
function bgmPlay() {
    if (!bgmNowPlaying) {
        soundOff.style.display = 'none';
        soundON.style.display = 'inline-block';
        bgmNowPlaying = !bgmNowPlaying;
        bgm.startMusic();
        musicStart()
    }
}

/**
 * 배경음 일시 정지
 */
function bgmStop() {
    if (bgmNowPlaying) {
        soundON.style.display = 'none';
        soundOff.style.display = 'inline-block';
        bgmNowPlaying = !bgmNowPlaying;
        bgm.pauseMusic();
        clearInterval(startInterval)
    }
}


// music running time
var runningTime = document.querySelector('.playing-time'),
    runningBar = document.querySelector('.playing-bar');
var min = '0', sec = '00', barWidth = '0';
var startInterval;
function musicStart (){
  startInterval = setInterval(function(){
    barWidth++;
    sec++;
    if( sec < 10 ) sec = '0' + sec;
    if( sec == 60 ) min++, sec = '00';
    if(min == 3) {
      clearInterval(startInterval);
      bgm.stopMusic();
      min = '0', sec = '00', barWidth = '0';
    };

    TweenMax.set(runningBar, { width: barWidth * 1.222 +'px'})


    console.log(barWidth)
    runningTime.innerHTML = min + ':'+ sec;
  }, 1000);

}

var list = document.querySelectorAll('table tr');
[].forEach.call(list, function(e){ 
  e.addEventListener("click", function(){
    alert('지금은 하단의 "Dream Girl" 듣기만 가능합니다.');
  }, false); 
}); 
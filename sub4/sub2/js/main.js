window.onload = function(){
  makeBG() 
}

var swiper = new Swiper(".swiper-container", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

function makeBG(){
  var swiperSlide = document.querySelectorAll('.swiper-slide');
  swiperSlide.forEach(function(e, idx){
    e.style.background = "url(img/bg/"+ (idx + 1) +".png)"
  }); 
}

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
  console.log(e.id)
  var list = '<tr>' +
    '<td>'+ e.id +'</td>' +
    '<td>'+ e.title +'</td>' +
    '<td class="music-info"></td>' +
    '<td class="music-lyr"></td>' +
    '<td class="music-lstn"></td>' +
  '</tr>';

  table.innerHTML += list;
})
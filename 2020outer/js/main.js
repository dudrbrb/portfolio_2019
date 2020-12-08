$(window).on("load", function(){
    topMotion();
    $.ajax({
      url:'https://ims-api.imform.net/v1/lotte/vote/enter/',
      type: 'POST',
      data:{
        "member_num": membernum
      },
      statusCode: {
        200: function(args) {
          if(args.member_play_yn == 'Y') {
              beforeData = true;
              voteId = args.member_play_value;
              ctPercent = args.result[0].ratio;
              pdPercent = args.result[1].ratio;

              var beforeSelect = document.getElementById(voteId);
              beforeSelect.setAttribute('checked', true);
              vote_btn.style.display = 'block';
      
              [].forEach.call(vote, function(e){
                  e.setAttribute('disabled', 'disabled');
              });
              
              imgChange(vote_btn, 'btn');
          }
        },
        400: function(err){
         alert('이름이 membernum인 cookie를 생성해주세요. \n value에 아무 숫자를 넣어주시면 됩니다. \n membernum을 바꾸면 중복참여가 가능합니다.')
        },
        404: function(err){
         errorMessege(err);
        },
      },
      error: function (err) {
        //400과 404를 제외한 에러가 발생했을시
        if(err.status !== 400 && err.status !== 404){
          alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
        }
      },    
      cache: false
    });
    
});
var membernum = getCookie('membernum'),
    nowDate = new Date(),
    finDay = nowDate.getDate();
    
var beforeData;

function loadingOn(){
    document.getElementById("loading").style.display = 'block';
}

function loadingOff(){
    document.getElementById("loading").style.display = 'none';
}

function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString() + ";path=/";
};
      
function getCookie(name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? unescape(value[2]) : null;
};

function topMotion(){
	var tl = new TimelineMax();
    tl.to('.tit', 0.5, {opacity: 1, y: 0})
      .to('.top_txt', 0.3, {scale: 1})
      .to('.ct_img', 0.3, {x: 0})
      .to('.ct_txt', 0.3, {scale: 1})
      .to('.pd_img', 0.3, {x: 0})
      .to('.pd_txt', 0.3, {scale: 1})
      .add('start')
      .to('.top_vs', 0.2, {opacity: 1, scale: 1}, 'start')
      .to('.ct_eff', 0.5, {opacity: 1, yoyo: true, repeat: -1, repeatDelay: 0.2}, 'start')
      .to('.pd_eff', 0.5, {opacity: 1, yoyo: true, repeat: -1, delay: 0.3, repeatDelay: 0.2}, 'start');
}




var vote = document.querySelectorAll('input[name=vote]'),
    vote_btn = document.querySelector('.vote_btn'),
    voteValue,
    voteId;

var wrapper = document.querySelector('#wrapper'),
    popup = document.querySelector('.popup_wrapper'),
    countdown = document.querySelector('.countdown'),
    popClose = document.querySelector('.close');

function openPopup(){
    var dDay =  29 - finDay;
    if(dDay < 10) dDay = '0' + dDay;

    if(dDay == 0) {
        countdown.innerHTML = "day";
        countdown.style.paddingRight = '30px'
    }else{
        countdown.innerHTML = dDay;
    }
    
    window.scrollTo(0,0)
    wrapper.style.height = '1120px';
    popup.style.display = 'block';
    TweenMax.set('.paper', {y: 0});

    [].forEach.call(vote, function(e){
        e.setAttribute('disabled', 'disabled');
    });
    
    imgChange(vote_btn, 'btn');
    settingPopup();
}




var ctPercent, // 코트 선택 비율
    pdPercent; // 패딩 선택 비율

var ctScore = document.querySelector('.ct_score'),
    pdScore = document.querySelector('.pd_score');

var ctBar = document.querySelector('.ct_score_bar'),
    pdBar = document.querySelector('.pd_score_bar');

var ctResult= document.querySelector('#ct_result'),
    pdResult = document.querySelector('#pd_result');

var coat = document.querySelector('#popCoat'),
    padding = document.querySelector('#popPadding'),
    winEff = document.querySelector('.winner_eff'),
    winTxt = document.querySelector('.winner_text');

var ctNumber,
    pdNumber,
    landingLink,
    options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '%' 
    };


function settingPopup(){
    ctNumber = new CountUp("ct_score", 0, ctPercent, 1, 3, options);
    pdNumber = new CountUp("pd_score", 0, pdPercent, 1, 3, options);

    progressBar(ctBar, ctPercent, 2.5);
    progressBar(pdBar, pdPercent, 2.5);

    winEff.style.display = 'block';

    if(ctPercent > pdPercent){ // 코트가 이길 때
        makePopup('win', 'lose', 'coat_btn', '40px', 'txt/ct_win', 'txt/pd_lose');
        pdScore.style.fontSize = '24px';
    }else if(ctPercent < pdPercent){ // 패딩이 이길 때
        makePopup('lose', 'win', 'padding_btn', '200px', 'txt/ct_lose', 'txt/pd_win');
        ctScore.style.fontSize = '24px';
    }else {
        makeSamePopup();
    }
}

function makePopup(ctClass, pdClass, winBtn, effMove, rstTxt1, rstTxt2){
    addClass(coat, ctResult, ctClass);
    addClass(padding, pdResult, pdClass);
    imgChange(prodBtn, winBtn);
    
    winEff.style.left = effMove;
    landingLink = 'lottecoupon://gate?page=a0083&shpgNewsNo=SNM00000000000113530';

    if( voteId == 'coat' ) imgChange(winTxt, rstTxt1);
    else imgChange(winTxt, rstTxt2);

    var tl = new TimelineMax();
    tl.to('.characters .win', 0.4, {opacity: 1, x: 0, delay: 0.2})
      .to('.characters .lose', 0.3, {opacity: 1, x: 0})
      .add('start')
      .to('.win', 0.4, { scale: 1}, 'start')
      .to('.lose', 0.4, { scale: 1})
      .to('.winner_eff', 0.5, {opacity: 1, yoyo: true, repeat: -1, repeatDelay: 0.2}, 'start');
}

function makeSamePopup(){
    addClass(coat, ctResult, 'same');  // 동점일 때
    addClass(padding, pdResult, 'same');
    
    imgChange(prodBtn, 'same_btn');
    imgChange(winTxt, 'txt/same');
    
    landingLink = 'lottecoupon://gate?page=a0083&shpgNewsNo=SNM00000000000113530';
    winEff.style.display = 'none';
    
    var tl = new TimelineMax();
    tl.to('#popCoat', 0.4, {opacity: 1, x: 0})
      .to('#popPadding', 0.3, {opacity: 1, x: 0})
      .to('#ct_result.same, #pd_result.same', 0.4, { scale: 1});
}

function addClass(el1, el2, c){
    var target = [el1, el2];
    target.forEach(function(t){ 
        t.className += " " + c; 
    });
}

function progressBar(o, p, t){
    p = Math.round(p)
    var tl = new TimelineMax();
    tl.set(o, {opacity: '0.' + p})
    .to(o, t, {scaleX : '0.' + p});

    ctNumber.start();
    pdNumber.start();
}

function imgChange(ele, src){
    ele.setAttribute('src', 'img/pop/'+ src +'.png' );
}



[].forEach.call(vote, function(e){
    e.addEventListener("click", function(){
        // 선택값 한글
        voteValue = document.querySelector('input[name=vote]:checked').value;
        // 선택값 영어
        voteId = document.querySelector('input[name=vote]:checked').getAttribute('id');

        vote_btn.style.display = 'block';
    });
});

vote_btn.addEventListener('click', function(){
    if(!beforeData){
        $.ajax({
          url:'https://ims-api.imform.net/v1/lotte/vote/play/',
          type: 'POST',
          data:{
            "member_num": membernum,
            "member_play_value": voteId
          },
          statusCode: {
            200: function(args) {
              ctPercent = args.result[0].ratio;
              pdPercent = args.result[1].ratio;
              TweenMax.to('.paper', 0.6, {y: 622, onComplete: openPopup});
            },
            400: function(err){
             errorMessege(err);
            },
            404: function(err){
             errorMessege(err);
            },
          },
          error: function (err) {
            //400과 404를 제외한 에러가 발생했을시
            if(err.status !== 400 && err.status !== 404){
              alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
            }
          },    
          cache: false
        });
    }else{
        TweenMax.to('.paper', 0.6, {y: 622, onComplete: openPopup});
    }
});

popClose.addEventListener('click', function(){
    wrapper.style.height = 'auto';
    popup.style.display = 'none';

    resetPopup();
});



function resetPopup(){
    progressBar(ctBar, 0, 0);
    progressBar(pdBar, 0, 0);

    var target = [coat, padding, ctResult, pdResult];
    target.forEach(function(t){t.removeAttribute('class')});

    var tl = new TimelineMax();
    tl.set('#popCoat', {opacity: 0, x: -100})
      .set('#popPadding', {opacity: 0, x: 100})
      .set('#ct_result, #pd_result', { scale: 0})
      .set('.winner_eff', { opacity: 0});
}

function errorMessege(error){
    var errText = '';
    error.responseJSON.errors.forEach(function(ele){
     errText += ele.message + '\n';
    })
    alert(errText);
}



// Popup Landing Button

var cpBtn = document.querySelector('.cp_btn'),
    prodBtn = document.querySelector('.prod_btn');

cpBtn.addEventListener('click', function(){
    console.log(finDay)
    if(finDay >= 16) window.open('lottecoupon://gate?page=a0026&cpnInfoNo=CPM00000000000035299', '_blank');
    else window.open('lottecoupon://gate?page=a0026&cpnInfoNo=CPM00000000000035106', '_blank')
});

prodBtn.addEventListener('click', function(){
    window.open(landingLink, '_blank'); 
});

$(".sns_btn").on("click", sns_Click);

function sns_Click() {
    var sns = $(this).attr('value');
    var strTitle = $(document).attr('title');
    var url = window.location.href;
    toSNS(sns, strTitle, url);
}


function toSNS(sns, strTitle, url) {
    if(result == 'undefined') result = 0 ;
    var snsArray = new Array();
    var strMsg = strTitle + ' ' + url;

    snsArray['twitter'] = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(strTitle) + '&url=' + encodeURIComponent(url+'?s=t')
    snsArray['facebook'] = 'http://www.facebook.com/share.php?u=' + encodeURIComponent(url+'?s=f');
  
    if (sns == 'kakao') {
        kakaoShare();
        CountCheck('카카오톡 공유하기 클릭');
    }else if(sns == 'insta'){
        instaShare();
    } else {
        if( sns == 'twitter') CountCheck('트위터 공유하기 클릭');
        if( sns == 'facebook') CountCheck('페이스북 공유하기 클릭');
        window.open(snsArray[sns]);
    }

    function kakaoShare() {
        Kakao.cleanup();

        Kakao.init('216b9781f31036b4c38fdfc1219e16e9');

        Kakao.Link.sendScrap({
            requestUrl: document.location.href
        });

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '당찬 소녀, CYNICAL',
                description: '내가 “하이틴 무비＂에 출연한다면?\n나의 하이틴 재질 알아보기',
                imageUrl: "https://ilotteshopping.com/highteen_test/image/thumb/5.png",
                link: {
                    mobileWebUrl: 'https://ilotteshopping.com/highteen_test/05',
                    webUrl: 'https://ilotteshopping.com/highteen_test/05'
                },
                imageWidth: 1200,
                imageHeight: 600,
            },
            buttons: [{
                title: '자세히보기',
                link: {
                    mobileWebUrl: 'https://ilotteshopping.com/highteen_test/05',
                    webUrl: 'https://ilotteshopping.com/highteen_test/05'
                }
            },{
              title: '테스트해보기',
              link: {
                  mobileWebUrl:'https://ilotteshopping.com/highteen_test/',
                  webUrl:'https://ilotteshopping.com/highteen_test/'
              }
          }],
          fail: function() {
                alert('모바일 기기에서만 가능한 기능입니다.');
          }
        });
    }

    function instaShare(){

        var varUA = navigator.userAgent.toLowerCase();
        if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
            //IOS
            window.open('instagram://media','_self');

        } else {
            //기타
            window.open('intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end','_self');
        }

    }

}

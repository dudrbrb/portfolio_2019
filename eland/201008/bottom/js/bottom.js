(function() {

    //하단 네비 버튼 갯수
    bottomCnt = 4;

    var getUrl = document.location.href.split("/");
    var gethash = document.location.href.split("#");

    
    //하단 네비 링크
    bottomLink = [
        "../main/index.html",
        "../sub/index.html#sub1",
        "../sub/index.html#sub2",
    ]

    var footer = document.querySelector('.navi');
    bottomScrollMotion();
    bottomOnClick();
    makeNavi();
    // preBtnClick();
    var more =$('#more')
    var wrapper =$('#wrapper')

    function bottomOnClick() {
        document.querySelector('.navi ul').addEventListener('click', function(e) {
            var t = e.target;
            var idx = $(t).index();
            if (idx === 3) { // 지난 매거진 보기
                TweenMax.to(more, 0.5, { top: 0, display:'block' })
                // wrapper.css("height", 1200);
                wrapper.css("position", "fixed");
                $('.navi ul li').removeClass('active')
                $('.navi ul li:nth-child(4)').addClass('active')
            } else{
                window.open(bottomLink[idx], '_self');
            }
            
        });
    };

    // 지난 매거진 닫기
    document.querySelector('.moreClose').addEventListener('click',function(e) {
        TweenMax.to(more, 0.5, {
            top: 1130, display: "none"
        })
        // wrapper.css("height", "auto");
        wrapper.css("position", "relative");
        $('.navi ul li:nth-child(4)').removeClass('active');
        if(getUrl[5] === "main"){
            makeNavi();
        } else if(getUrl[5] === "sub"){
            botActive();
        }
    });

    
    function makeNavi(){
        if(getUrl[6] === "main"){
            $('.navi ul li:nth-child(1)').addClass('active');
        }
    };


    function botActive(){

        var idx = Number($(".swiper-slide-active").attr("data-hash").substring(3,4))
        // 하단 네비
          $('.navi ul li').removeClass('active');
          $('.navi ul li:nth-child('+(idx+1)+')').addClass('active');
    
          if(idx === 3){
            $('.navi ul li').removeClass('active');
          }
      } 

    function bottomScrollMotion() {
        // IE하위 버전 호환용
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
        // 현재 스크롤 값
        var _top = supportPageOffset ?
        window.pageYOffset :
        isCSS1Compat ?
        document.documentElement.scrollTop :
        document.body.scrollTop;

        window.addEventListener('scroll', function() {
            // 스크롤 시작할 때의 스크롤 값
            var _scroll_top = supportPageOffset ?
              window.pageYOffset :
              isCSS1Compat ?
              document.documentElement.scrollTop :
              document.body.scrollTop;

            // 스크롤 맨 하단 값
            var _scroll_bottom = document.body.scrollHeight - window.innerHeight;

            // ios 스크롤 바운스 대비용
            if (_scroll_top < 0) return footer.scrollMotion(0);
            if (_scroll_top >= _scroll_bottom) {
                    return footer.scrollMotion(96);
            }

            // 스크롤 업 다운 인식
            if (_top < _scroll_top) {
                //스크롤 다운
                footer.scrollMotion(96);
            } else {
                // 스크롤 업
                footer.scrollMotion(0);
            }
            //  console.log(_flow);
            _top = _scroll_top;
        });
    }

    footer.scrollMotion = function(bottomValue) {
         var el = document.getElementById('btNav');
    
         if (el != null) TweenMax.to('#btNav', 0.4, { y: bottomValue });
         return TweenMax.to(footer, 0.4, { y: bottomValue });
    };

  
    //하단 네비 링크
    var preLink = [
        "http://www.edmeland.com/magazine/Sep/200901/sub/index.html#sub1",
        "http://www.edmeland.com/magazine/Sep/200901/sub/index.html#sub2",
        "http://www.edmeland.com/magazine/Aug/200801/sub/index.html#sub1",
        "http://www.edmeland.com/magazine/Aug/200801/sub/index.html#sub2",
        "http://www.edmeland.com/vipmagazine/Jul/sub/index.html#sub1",
        "http://www.edmeland.com/vipmagazine/Jul/sub/index.html#sub2",
        "http://www.edmeland.com/vipmagazine/200613/sub/index.html#sub1",
        "http://www.edmeland.com/vipmagazine/200613/sub/index.html#sub2",
    ];

    // clickEvent();
    // function clickEvent(){
    //     var btn = document.querySelectorAll('.pre_btn');

    //     for(var i = 0; i < btn.length; i++){
    //         btn[i].addEventListener('click', function() {
    //             console.log(this)
    //             console.log(this.idx)
    //             return window.open(preLink[i], '_self');
    //         });
    //     }
    // }

        var btn = $('.pre_btn');
        btn.on('click', function() {
            var idx = $(this).index('.pre_btn');
            window.open(preLink[idx], '_self');
        });
     

  

})();
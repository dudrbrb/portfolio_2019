window.onload = function () {
	itemSwiper();

	_url = $(location).attr('href');
	$(".link_box").val(_url);

	TweenMax.to('.img_btn', 1, { opacity: 0.3, yoyo: true, repeat: -1 })

	var param = getUrlParams();
	goResult = param.s;
	
	if(goResult){
		if(goResult == 'k') CountCheck('카카오톡 공유하기 유입');
		if(goResult == 'f') CountCheck('페이스북 공유하기 유입')
		if(goResult == 't') CountCheck('트위터 공유하기 유입')
	}else{
		CountCheck('url 공유하기 유입')
	}
};

function getUrlParams() {
	var params = {};
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
	return params;
};

var mySwiper;

var itemSwiper = function () {
	mySwiper = new Swiper(".swiper-container-product", {
		loop: false,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 15
	});
}

var _url,
	result,
	link,
	agent = navigator.userAgent.toLowerCase();

$('.reset_btn').on('click', function () {
	userData = {};
	history.replaceState({}, null, location.pathname);
	document.location.href = '../index.html';

	$('#container').css('height', 'auto');
	$('.sub_btn li').removeClass('on');
	$('.sub_btn li').css('background-image', 'none');
	$('.img_btn, .item_div').hide();
	$('.go_url, .shop_btn').show();

});

$('.img_btn').on('click', function () {
	downloadImage("image/save/7.jpg", "download", true);
});

$('.shop_btn').on('click', function () {
	link = $(this).index('.shop_btn');
	if (link == 0) {window.open('https://www.lotteon.com/p/product/LE1205960914', '_blank'); CountCheck('바이탈싸인 상품1'); }
	if (link == 1) {window.open('https://www.lotteon.com/p/product/LE1205928439', '_blank'); CountCheck('바이탈싸인 상품2'); }
	if (link == 2) {window.open('https://www.lotteon.com/p/product/LE1205928441', '_blank'); CountCheck('바이탈싸인 상품3'); }

});

$('.go_url').on('click', function () {
	window.open('https://www.lotteon.com/display/plan/planDetail/9265?mall_no=2', '_blank')
});



var userAddInfo = function (data) {
	$.ajax({
		url: 'https://ims-api.imform.net/v1/lotte/highteen/',
		type: 'POST',
		data: data,
		statusCode: {
			201: function (args) {
			},
			400: function (err) {
				errorMessege(err);
			},
			404: function (err) {
				errorMessege(err);
			},
		},
		error: function (err) {
			//400과 404를 제외한 에러가 발생했을시
			if (err.status !== 400 && err.status !== 404) {
				alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
			}
		},
		cache: false
	});

};

function errorMessege(error) {
	var errText = '';
	error.responseJSON.errors.forEach(function (ele) {
		errText += ele.message + '\n';
	})
	alert(errText);
}



function downloadImage(imageUrl, fName, bool) {
	var ua = String(navigator.userAgent).toLowerCase();
  
	if (/msie|trident/i.test(navigator.userAgent)) {
	  var canvas = document.createElement("canvas");
	  var img = document.createElement("img");
	  img.onload = function(e) {
		canvas.width = img.width;
		canvas.height = img.height;
		var context = canvas.getContext("2d");
		context.drawImage(img, 0, 0, img.width, img.height);
		window.navigator.msSaveBlob(canvas.msToBlob(), fName + ".jpg");
	  };
	  img.src = imageUrl;
	} else {
	//   console.log(bool);
	  if (!/iphone|ipad/.test(ua) && bool === true) {
		imageUrl = imageUrl.replace("ios", "android");
		if (agent.indexOf("kakaotalk") != -1) {
			kakaoDown(imageUrl);
		}
		else createDownTag(imageUrl, fName);
	  } else createDownTag(imageUrl, fName);
	}
}
function createDownTag(imageUrl, fName) {
	var $a = $("<a>")
		.attr("href", imageUrl)
		.attr("download", fName)
		.appendTo("body");
	$a[0].click();
	$a.remove();
}

/**
 * 카카오 브라우저 이미지 다운
 */
function kakaoDown(path) {
	window.open("https://ims-api.imform.net/v1/lotte/imgdown/?path=" + path);
};



$(document).on("click", ".link_btn", function (e) {
	CountCheck('URL 공유하기 클릭');

	// 링크복사 시 화면 크기 고정 
	var html = "<input id='clip_target' type='text' value='' style='position:absolute;top:-9999em;'/>";
	$(this).append(html);

	var input_clip = document.getElementById("clip_target");
	//현재 url 가져오기 

	var _url = $(location).attr('href');
	$("#clip_target").val(_url);

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		var editable = input_clip.contentEditable;
		var readOnly = input_clip.readOnly;
		input_clip.contentEditable = true;
		input_clip.readOnly = false;

		var range = document.createRange();
		range.selectNodeContents(input_clip);

		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		input_clip.setSelectionRange(0, 999999);
		input_clip.contentEditable = editable;
		input_clip.readOnly = readOnly;
	} else {
		input_clip.select();
	} try {
		var successful = document.execCommand('copy');
		input_clip.blur();
		if (successful) {
			alert("URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.");
		} else {
			alert('이 브라우저는 지원하지 않습니다.');
		}
	} catch (err) {
		alert('이 브라우저는 지원하지 않습니다.');
	};
});
//클립보드 복사
function CountCheck(datanum){
	$.ajax({
		url:'https://ims-api.imform.net/v1/lotte/highteen/log/',
		type: 'POST',
		data: {
			category : datanum
		},
		statusCode: {
			201: function(args) {
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
}
function errorMessege(error){
	var errText = '';
	error.responseJSON.errors.forEach(function(ele){
	 errText += ele.message + '\n';
	})
	alert(errText);
}
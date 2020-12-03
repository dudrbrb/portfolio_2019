
function getCookie(name){
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length){
		var y = (x + nameOfCookie.length);

		if (document.cookie.substring(x, y) == nameOfCookie){
		if ((endOfCookie = document.cookie.indexOf(";", y)) == -1){
			endOfCookie = document.cookie.length;
		}
		return unescape (document.cookie.substring(y, endOfCookie));
	}
	x = document.cookie.indexOf (" ", x) + 1;
	if (x == 0) break;
	}
	return "";
}

function setCookie(name, value, expiredays){
	var todayDate = new Date();

	todayDate.setDate (todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}



function setCookieAt00( name, value, expiredays ) {   
    var todayDate = new Date();   
    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  
    if ( todayDate > new Date() )  
    {  
    expiredays = expiredays - 1;  
    }  
    todayDate.setDate( todayDate.getDate() + expiredays );   
     document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"   
  }  

  function closeWinAt00(winName, expiredays) {   
   setCookieAt00( winName, "done" , expiredays);   
   var obj = eval( "window." + winName );  
   obj.style.display = "none";  
}  

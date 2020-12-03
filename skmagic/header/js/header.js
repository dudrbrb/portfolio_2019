$(window).on("load", function () {
    var tit = document.location.href.split('/')[4];
    $('.h-tit').attr('src', '../header/img/' + tit + '.png')
})


$('.mainBtn').on('click', function () {
    window.open('http://skmagicathome.com/magic/200902/main/index.html?messageHash=undefined&userHash=undefined', '_self')
})
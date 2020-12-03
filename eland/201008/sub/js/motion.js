function motionreset() {
  TweenMax.set('.op', {opacity:0});
  TweenMax.set('.moveY', {y: 50, opacity:0});
  TweenMax.set('.fromRight', {x: 100, opacity:0});
  TweenMax.set('.fromLeft', {x: -100, opacity:0});
  TweenMax.set('.clip', { clip: "rect(0px, 0px, 600px, 0px)"});
}

function motionArray(idx) {
    var arr = [
        fs1Motion(idx),
        fs2Motion(idx),
        fs3Motion(idx),
        fs4Motion(idx),
        fd1Motion(idx),
        fd2Motion(idx),
        fd3Motion(idx),
        fd4Motion(idx),
        finMotioin(idx)
    ];

    return arr[idx];
}


function fs1Motion(idx) {
    var flag = 0;

    clip('.fs1_txt2', 295, 0.6, idx, flag);
    clip('.fs1_txt3', 320, 0.6, idx, flag);
    clip('.fs1_img3', 540, 0.8, idx, flag);
    clip('.fs1_txt6', 280, 0.6, idx, flag);

    moveY('.fs1_stg1', idx, flag);
    moveY('.fs1_stg2', idx, flag);

    moveY('.fs1_txt1', idx, flag);
    moveY('.fs1_txt4', idx, flag);
    moveY('.fs1_txt5', idx, flag);
    moveY('.fs1_txt7', idx, flag);
    moveY('.fs1_txt8', idx, flag);

    rotate1('.fs1_img1', idx, flag)
    rotate2('.fs1_img2', idx, flag)
    
    rotate2('.fs1_img4', idx, flag)
    rotate1('.fs1_img5', idx, flag)
    rotate2('.fs1_img6', idx, flag)

    rotate1('.fs1_img7', idx, flag)
    rotate2('.fs1_img8', idx, flag)
    rotate2('.fs1_img9', idx, flag)
    rotate1('.fs1_img10', idx, flag)
}


function fs2Motion(idx){
  var flag = 1;

  clip('.fs2_txt1', 280, 0.6, idx, flag);
  clip('.fs2_txt2', 280, 0.6, idx, flag);
  clip('.fs2_txt3', 410, 0.9, idx, flag);
  clip('.fs2_txt5', 260, 0.6, idx, flag);
  clip('.fs2_txt7', 311, 0.7, idx, flag);
  clip('.fs2_txt9', 340, 0.7, idx, flag);

  moveY('.fs2_stg1', idx, flag);
  moveY('.fs2_stg2', idx, flag);
  moveY('.fs2_txt4', idx, flag);
  moveY('.fs2_txt6', idx, flag);
  moveY('.fs2_txt8', idx, flag);
  moveY('.fs2_txt10', idx, flag);

  rotate1('.fs2_img1', idx, flag)
  rotate2('.fs2_img2', idx, flag)

  rotate2('.fs2_img3', idx, flag)
  rotate1('.fs2_img4', idx, flag)
  rotate2('.fs2_img5', idx, flag)

  rotate1('.fs2_img6', idx, flag)
  rotate2('.fs2_img7', idx, flag)

  rotate1('.fs2_img8', idx, flag)
  rotate2('.fs2_img9', idx, flag)

}

function fs3Motion(idx){
  var flag = 2;
  var tl = new TimelineMax();

  clip('.fs3_txt1', 360, 0.7, idx, flag);
  clip('.fs3_img1', 540, 0.8, idx, flag);
  clip('.fs3_img2', 540, 0.8, idx, flag);
  clip('.fs3_img3', 540, 0.8, idx, flag);
  clip('.fs3_img4', 540, 0.8, idx, flag);
  clip('.fs3_img5', 540, 0.8, idx, flag);
  clip('.fs3_img6', 540, 0.8, idx, flag);

  moveY('.fs3_txt2', idx, flag);
  moveY('.fs3_txt3', idx, flag);
  
  moveX('.list1', idx, flag);
  moveX('.list2', idx, flag);
  moveX('.list3', idx, flag);
}

function fs4Motion(idx){
  var flag = 3;

  clip('.fs4_txt1', 90, 0.4, idx, flag);
  clip('.fs4_txt2', 90, 0.4, idx, flag);
  clip('.fs4_txt3', 178, 0.6, idx, flag);

  moveY('.fs4_stg1', idx, flag);
  moveY('.fs4_stg2', idx, flag);
  moveY('.fs4_stg3', idx, flag);

}

function fd1Motion(idx){
  var flag = 4;

  clip('.fd1_txt1', 235, 0.6, idx, flag);
  clip('.fd1_txt2', 303, 0.7, idx, flag);

  moveY('.fd1_stg1', idx, flag);

}

function fd2Motion(idx){
  var flag = 5;

  moveY('.fd2_txt5', idx, flag);

  moveX('.fd2_img1', idx, flag);
  moveX('.fd2_img2', idx, flag);

  clip('.fd2_txt1', 270, 0.7, idx, flag);
  clip('.fd2_txt2', 270, 0.7, idx, flag);
  clip('.fd2_txt3', 270, 0.7, idx, flag);
  clip('.fd2_txt4', 400, 0.8, idx, flag);

}

function fd3Motion(idx){
  var flag = 6;

  moveY('.fd3_txt1', idx, flag);
}

function fd4Motion(idx){
  var flag = 7;
  var tl1 = new TimelineMax();
  var tl2 = new TimelineMax();
  var tl3 = new TimelineMax();
  var tl4 = new TimelineMax();

  op('.fd4_txt1', idx, flag);
  moveY('.fd4_txt20', idx, flag);
  moveY('.fd4_txt25', idx, flag);
  moveY('.fd4_txt28', idx, flag);
  moveY('.fd4_img4', idx, flag);

  food('.fd4_img2', '.fd4_pt7', '.fd4_txt22', '.fd4_txt21', '.fd4_line14', idx, flag);
  food('.fd4_img3', '.fd4_pt8', '.fd4_txt23', '.fd4_txt24', '.fd4_stg7', idx, flag);

  drink('.fd4_img5', '.fd4_txt33', '.fd4_line18', idx, flag);
  drink('.fd4_img6', '.fd4_txt29', '.fd4_line17', idx, flag);
  drink('.fd4_img7', '.fd4_txt30', '.fd4_line19', idx, flag);
  drink('.fd4_img8', '.fd4_txt32', '.fd4_line20', idx, flag);
  drink('.fd4_img9', '.fd4_stg9', '.fd4_stg10', idx, flag);

  clip('.fd4_stg8', 30, 0.3, idx, flag);

  txt('.fd4_stg2', '.fd4_line9', idx, flag);
  txt('.fd4_stg3', '.fd4_line10', idx, flag);
  txt('.fd4_stg4', '.fd4_stg6', idx, flag);
  txt('.fd4_stg5', '.fd4_line13', idx, flag);


  tl1.to('.fd4_txt2', 0.3, {opacity: 1})
    .to('.fd4_line1', 0.4, { clip: "rect(0px, 100px, 100px, 0px)"})
    .to('.fd4_txt3', 0.4, {opacity: 1})
    .to('.fd4_line2', 0.4, { clip: "rect(0px, 100px, 100px, 0px)"})
    .add('start1')
    .to('.fd4_txt4', 0.4, {opacity: 1}, 'start1')
    .staggerTo('.fd4_stg1', 0.6, { clip: "rect(0px, 100px, 100px, 0px)"},0.3, 'start1')
    .to('.fd4_pt1', 0.4, { clip: "rect(0px, 150px, 100px, 0px)"})
    .to('.fd4_img1', 0.4, { opacity: 1});

  tl2.to('.fd4_txt5', 0.3, {opacity: 1})
    .to('.fd4_line3', 0.3, { clip: "rect(0px, 80px, 100px, 0px)"})

  tl3.to('.fd4_txt8', 0.4, {opacity: 1})
    .to('.fd4_line6', 0.4, { clip: "rect(0px, 152px, 100px, 0px)"})
    .to('.fd4_txt9', 0.4, {opacity: 1})
    .to('.fd4_txt6', 0.4, {opacity: 1})
    .to('.fd4_line4', 0.3, { clip: "rect(0px, 50px, 100px, 0px)"})
    .to('.fd4_txt7', 0.3, {opacity: 1})
    .to('.fd4_line5', 0.4, { clip: "rect(0px, 350px, 100px, 0px)"});

  tl4.to('.fd4_txt10', 0.4, {opacity: 1})
    .to('.fd4_line7', 0.3, { clip: "rect(0px, 150px, 100px, 0px)"})
    .to('.fd4_txt11', 0.4, {opacity: 1})
    .to('.fd4_line8', 0.4, { clip: "rect(0px, 152px, 100px, 0px)"})
    .to('.fd4_pt5', 0.4, { clip: "rect(0px, 152px, 100px, 0px)"});

  scrollMotion(tl2, '.fd4_txt5', idx, flag);
  scrollMotion(tl3, '.fd4_txt8', idx, flag);
  scrollMotion(tl4, '.fd4_txt10', idx, flag);

  TWmotionPlayKill (idx, tl1, flag);
  TWmotionPlayKill (idx, tl2, flag);
  TWmotionPlayKill (idx, tl3, flag);
  TWmotionPlayKill (idx, tl4, flag);
}

function finMotioin(idx){
  var flag = 8;
  var tl = new TimelineMax();

  tl.to('.fin_img1', 0.7, {opacity: 0, yoyo: true, repeat: -1, ease: Power0.easeNone})
  TWmotionPlayKill (idx, tl, flag);
}

function rotate1( obj, idx, flag){
  var tl = new TimelineMax();
  tl.to(obj, 0.7, {rotation: 10, yoyo: true, repeat: -1, transformOrigin : 'bottom', ease: Power0.easeNone})
  TWmotionPlayKill (idx, tl, flag);
}
function rotate2( obj, idx, flag){
  var tl = new TimelineMax();
  tl.to(obj, 0.7, {rotation: -10, yoyo: true, repeat: -1, transformOrigin : 'bottom', ease: Power0.easeNone})
  TWmotionPlayKill (idx, tl, flag);
}

function txt(obj1, obj2, idx, flag){
  var tl = new TimelineMax();
  tl.staggerTo(obj1, 0.4, {opacity: 1}, 0.3)
  .to(obj2, 0.6, { clip: "rect(0px, 230px, 100px, 0px)"})
 
  scrollMotion(tl,obj1, idx, flag);

}

function food(obj1, obj2, obj3, obj4, obj5, idx, flag){
  var tl = new TimelineMax();
  tl.to(obj1, 0.4, {x : 0, opacity: 1})
  .to(obj2, 0.4, { clip: "rect(0px, 100px, 100px, 0px)"})
  .to(obj3, 0.4, {opacity: 1})
  .staggerTo(obj5, 0.6, { clip: "rect(0px, 180px, 100px, 0px)"}, 0.3)
  .to(obj4, 0.4, {opacity: 1});

  scrollMotion(tl, obj1, idx, flag);
}

function drink(obj1, obj2, obj3, idx, flag){
  var tl = new TimelineMax();
  tl.to(obj1, 0.4, {x : 0, opacity: 1})
  .staggerTo(obj2, 0.3, {opacity: 1}, 0.3)
  .staggerTo(obj3, 0.4, { clip: "rect(0px, 200px, 100px, 0px)"}, 0.3)

  scrollMotion(tl, obj1, idx, flag);
}

function clip(obj, w, t, idx, flag){
  var tl = new TimelineMax();
  tl.staggerTo(obj, t,{ clip: "rect(0px, "+ w +"px, 600px, 0px)"}, 0.3)
  
  scrollMotion(tl, obj, idx, flag);
  
}

function op(obj, idx, flag){
  var tl = new TimelineMax();
  tl.staggerTo(obj, 0.5,{opacity: 1}, 0.3)
  
  scrollMotion(tl, obj, idx, flag);
}

function moveY(obj, idx, flag){
  var tl = new TimelineMax();
  tl.staggerTo(obj, 0.5,{opacity: 1, y: 0}, 0.3)
  
  scrollMotion(tl, obj, idx, flag);
}

function moveX(obj, idx, flag){
  var tl = new TimelineMax();
  tl.staggerTo(obj, 0.5,{opacity: 1, x: 0}, 0.3)
  
  scrollMotion(tl, obj, idx, flag);
  
}


function scrollMotion(tl, obj, idx, flag) {
  var controller = new ScrollMagic.Controller();
  
  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -260 })
  .addTo(controller)
  .setTween(tl)
  .reverse(false)
  
  motionPlayKill(idx, scene, flag);
}

function TWmotionPlayKill(idx, el, flag) {
  el.pause();
  if (idx === flag) {
      el.play();
  } else {
      el.kill();
  }
}

function motionPlayKill(idx, scene, flag) {
  if (idx === flag) {
      scene = scene.refresh();
  } else {
      scene = scene.destroy(true);
  }
}
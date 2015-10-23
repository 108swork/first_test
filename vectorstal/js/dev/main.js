// functions

function elch(selector) {
  return ($(selector).length > 0);
}

function sizeFix() {
  if(winWidth > 1023) { //  gen_menu fix
    var sfT = 0.5;
    TweenMax.killTweensOf('.gen_menu');
    TweenMax.killTweensOf('.gm_close');
    TweenMax.killTweensOf('.gm_open');
    TweenMax.to('.gen_menu', 0, {width : 'auto', display: 'table'});
    TweenMax.to('.gen_menu', sfT, {scale : 1, opacity: 1});
    TweenMax.to('.gm_close', sfT, {opacity:0,scale:0});
    TweenMax.to('.gm_close', sfT, {display:'none',delay:sfT});
    TweenMax.to('.gm_open', sfT, {opacity:0,scale:0});
    TweenMax.to('.gm_open', sfT, {display:'none',delay:sfT});
  }
  else {
    TweenMax.killTweensOf('.gen_menu');
    TweenMax.killTweensOf('.gm_close');
    TweenMax.killTweensOf('.gm_open');
    gm_close();
  }
}

function defineParam() {		//		define basic parametrs
  winHeight = $(window).height();
  winWidth = $(window).width();
  whAdd = ((winHeight/100)*10);

  docScroll = $(window).scrollTop();
  uEf = docScroll;	//		up_line
  dEf = (winHeight + docScroll);		//		down_line
  docScroll = $(document).scrollTop();
}

function light(selector) {
  var targLight = $(selector);
  TweenMax.to(targLight, 0, { display : 'block' });
  TweenMax.to(targLight, 0.5, { opacity: 1 });
}
function dark(selector) {
  var targDark = $(selector);
  TweenMax.to(targDark, 0.5, { opacity: 0 });
  TweenMax.to(targDark, 0, { display : 'none', delay: 0.5 });
}

function aA(selector) {		// 	check "is element in visible area"
  var el1u = eUl(selector);
  var el1d = eDl(selector);
  if (((dEf - whAdd) > el1u) & ((uEf + whAdd) < el1d)) {
    return true;
  }
  else return false;
}
function eUl(arg) {		//		get element up line
  var valEUL = $(arg).offset().top;
  return valEUL;
}
function eDl(arg) {		//		get element down line
  var scrlT1 = $(arg).offset().top;
  var elemH1 = $(arg).outerHeight();
  var valEDL = scrlT1 + elemH1;
  return valEDL;
}

function gm_open() {
  var goT = 0.5;
  TweenMax.killTweensOf('.gen_menu');
  TweenMax.killTweensOf('.gm_close');
  TweenMax.killTweensOf('.gm_open');
  TweenMax.to('.gm_open', goT, {opacity:0,scale:0});
  TweenMax.to('.gm_open', goT, {display:'none',delay:goT});
  TweenMax.to('.gen_menu',0,{display:'table'});
  TweenMax.to('.gm_close',0,{display:'block'});
  TweenMax.to('.gm_close',goT,{opacity:1,scale:1,delay: goT});
  TweenMax.to('.gen_menu',goT,{scale: 1, opacity: 1, delay: goT/2});
}
function gm_close() {
  var gcT = 0.5;
  TweenMax.killTweensOf('.gen_menu');
  TweenMax.killTweensOf('.gm_close');
  TweenMax.killTweensOf('.gm_open');
  TweenMax.to('.gm_close', gcT, {opacity:0,scale:0});
  TweenMax.to('.gm_close', gcT, {display:'none',delay:gcT});
  // TweenMax.to('.gm_close',0,{display:'block'});
  TweenMax.to('.gen_menu',gcT,{scale:0, opacity: 0, delay: gcT/2});
  TweenMax.to('.gen_menu',0,{display:'none', delay: gcT*1.5});
  TweenMax.to('.gm_open', gcT, {opacity:1,scale:1,delay: gcT});
  TweenMax.to('.gm_open', 0, {display:'block',delay: gcT});
}

function menuScroll() {
  var hwHeight = $('.head_wrap').outerHeight();
  if(docScroll > hwHeight) {
    TweenMax.to('#gen_menu_wrap',0,{position:'fixed', top: 0, marginTop: 0});

  }
  else { TweenMax.to('#gen_menu_wrap',0,{position:'absolute', top: 'auto', marginTop: .9+'rem'}); }
}

$(document).ready(function(){

  defineParam();
  sizeFix();
  menuScroll();

  $(window).resize(function(){
    defineParam();
    sizeFix();
    menuScroll();
  });

  $('.but_t1').hover(function(){
    TweenMax.to(this, 0.4, {scale:1.02});
  }, function(){
    TweenMax.to(this, 0.4, {scale:1});
  });

  $('.pulse_icon').hover(function(){
    var hdimg = $(this).find('.pim');
    TweenMax.fromTo(hdimg, 0.4, {scale:1}, { scale: 1.05, repeat : -1 });
  }, function(){
    var hdimg = $(this).find('.pim');
    TweenMax.killTweensOf(hdimg);
  });

  $('.gm_open').click(function(){
    gm_open();
  });
  $('.gm_close').click(function(){
    gm_close();
  });

  $(window).scroll(function(){
    defineParam();
    menuScroll();
  });

  $('.lm_item').not('.active').find('ul').css({display:'none'});

  $('.lm_item').click(function(){
    if($(this).is('.active')) {
      $(this).removeClass('active');
      var targ = $(this).find('ul');
      $(targ).slideUp();
    }
    else {
      $('.lm_item').removeClass('active'); // если нужно сворачивать остальные меню
      $('.lm_item').find('ul').slideUp(); // если нужно сворачивать остальные меню
      $(this).addClass('active');
      $(this).find('ul').slideDown();
    }
  });

});

$(document).ready(function(){
  //  JS and JQ plugins

  var owl1 = $('.owl_slider');
  owl1.owlCarousel({
    items :1,
		itemsDesktop: false,
    autoHeight : true,
		autoPlay : 8000,
		responsive : true,
		pagination : false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false
  });
  $('.os_prev').click(function(){
    owl1.trigger('owl.prev');
  });
  $('.os_next').click(function(){
    owl1.trigger('owl.next');
  });

  var owl2 = $('.akcii_body');
  owl2.owlCarousel({
    items :1,
		itemsDesktop: false,
    autoHeight : true,
		autoPlay : 8000,
		responsive : true,
		pagination : false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false
  });





























});

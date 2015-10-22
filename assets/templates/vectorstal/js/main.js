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

function elch(e){return $(e).length>0}function sizeFix(){if(winWidth>1023){var e=.5;TweenMax.killTweensOf(".gen_menu"),TweenMax.killTweensOf(".gm_close"),TweenMax.killTweensOf(".gm_open"),TweenMax.to(".gen_menu",0,{width:"auto",display:"table"}),TweenMax.to(".gen_menu",e,{scale:1,opacity:1}),TweenMax.to(".gm_close",e,{opacity:0,scale:0}),TweenMax.to(".gm_close",e,{display:"none",delay:e}),TweenMax.to(".gm_open",e,{opacity:0,scale:0}),TweenMax.to(".gm_open",e,{display:"none",delay:e})}else TweenMax.killTweensOf(".gen_menu"),TweenMax.killTweensOf(".gm_close"),TweenMax.killTweensOf(".gm_open"),gm_close()}function defineParam(){winHeight=$(window).height(),winWidth=$(window).width(),whAdd=winHeight/100*10,docScroll=$(window).scrollTop(),uEf=docScroll,dEf=winHeight+docScroll,docScroll=$(document).scrollTop()}function light(e){var n=$(e);TweenMax.to(n,0,{display:"block"}),TweenMax.to(n,.5,{opacity:1})}function dark(e){var n=$(e);TweenMax.to(n,.5,{opacity:0}),TweenMax.to(n,0,{display:"none",delay:.5})}function aA(e){var n=eUl(e),o=eDl(e);return dEf-whAdd>n&uEf+whAdd<o?!0:!1}function eUl(e){var n=$(e).offset().top;return n}function eDl(e){var n=$(e).offset().top,o=$(e).outerHeight(),a=n+o;return a}function gm_open(){var e=.5;TweenMax.killTweensOf(".gen_menu"),TweenMax.killTweensOf(".gm_close"),TweenMax.killTweensOf(".gm_open"),TweenMax.to(".gm_open",e,{opacity:0,scale:0}),TweenMax.to(".gm_open",e,{display:"none",delay:e}),TweenMax.to(".gen_menu",0,{display:"table"}),TweenMax.to(".gm_close",0,{display:"block"}),TweenMax.to(".gm_close",e,{opacity:1,scale:1,delay:e}),TweenMax.to(".gen_menu",e,{scale:1,opacity:1,delay:e/2})}function gm_close(){var e=.5;TweenMax.killTweensOf(".gen_menu"),TweenMax.killTweensOf(".gm_close"),TweenMax.killTweensOf(".gm_open"),TweenMax.to(".gm_close",e,{opacity:0,scale:0}),TweenMax.to(".gm_close",e,{display:"none",delay:e}),TweenMax.to(".gen_menu",e,{scale:0,opacity:0,delay:e/2}),TweenMax.to(".gen_menu",0,{display:"none",delay:1.5*e}),TweenMax.to(".gm_open",e,{opacity:1,scale:1,delay:e}),TweenMax.to(".gm_open",0,{display:"block",delay:e})}function menuScroll(){var e=$(".head_wrap").outerHeight();docScroll>e?TweenMax.to("#gen_menu_wrap",0,{position:"fixed",top:0,marginTop:0}):TweenMax.to("#gen_menu_wrap",0,{position:"absolute",top:"auto",marginTop:"0.9rem"})}$(document).ready(function(){defineParam(),sizeFix(),menuScroll(),$(window).resize(function(){defineParam(),sizeFix(),menuScroll()}),$(".but_t1").hover(function(){TweenMax.to(this,.4,{scale:1.02})},function(){TweenMax.to(this,.4,{scale:1})}),$(".pulse_icon").hover(function(){var e=$(this).find(".pim");TweenMax.fromTo(e,.4,{scale:1},{scale:1.05,repeat:-1})},function(){var e=$(this).find(".pim");TweenMax.killTweensOf(e)}),$(".gm_open").click(function(){gm_open()}),$(".gm_close").click(function(){gm_close()}),$(window).scroll(function(){defineParam(),menuScroll()})}),$(document).ready(function(){var e=$(".owl_slider");e.owlCarousel({items:1,itemsDesktop:!1,autoHeight:!0,autoPlay:8e3,responsive:!0,pagination:!1,itemsDesktopSmall:!1,itemsTablet:!1,itemsMobile:!1}),$(".os_prev").click(function(){e.trigger("owl.prev")}),$(".os_next").click(function(){e.trigger("owl.next")})});
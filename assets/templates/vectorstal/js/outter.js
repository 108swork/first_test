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

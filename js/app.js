'use strict';

var init = function init() {
  // Función menú hamburguesa
  // $('#burger-icon').on('click', function(event) {
  //   event.preventDefault();
  //   $('.menu-icon').toggleClass('active');
  //   $('.menu-icon').find('div').removeClass('no-animation');
  // });
  $('#nav-icon4').click(function() {
	  	$(this).toggleClass('open');
  });

  // Smooth scroll
  $('header a').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({ scrollTop: $($(event.target).attr('href')).offset().top }, 1000);
  });
};

window.addEventListener('load', init);
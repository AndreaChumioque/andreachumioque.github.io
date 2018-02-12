'use strict';

var init = function init() {
  // Función menú hamburguesa
  $('.menu-icon').click(function (event) {
    $('.menu-icon').toggleClass('active');
    $('.menu-icon').find('div').removeClass('no-animation');
  });

  // Función scroll header
  var topContent = $('#aboutme').offset().top;
  console.log(topContent);
  $(document).scroll(function () {
    if ($(window).scrollTop() > 56) {
      $('.navbar').css('background', 'rgba(89, 89, 89, 0.35)');
      console.log('oscuro');
    } else {
      $('.navbar').css('background', 'rgba(255, 255, 255, 0.15)');
      console.log('claro');
    }
  });
};

window.addEventListener('load', init);
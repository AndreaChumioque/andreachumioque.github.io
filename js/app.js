'use strict';

var init = function init() {
  // Función menú hamburguesa
  $('.menu-icon').click(function (event) {
    $('.menu-icon').toggleClass('active');
    $('.menu-icon').find('div').removeClass('no-animation');
  });
};

window.addEventListener('load', init);
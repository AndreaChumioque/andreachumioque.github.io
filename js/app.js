'use strict';

$(window).on('load', function() {
  // Función menú hamburguesa
  $('#nav-icon4').click(function(event) {
    $('#nav-icon4').toggleClass('open');
  });

  // Smooth scroll
  $('header a').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({ scrollTop: $($(event.target).attr('href')).offset().top - 75 }, 1000);
  });

  $(function() {
    Grid.init();
  });

  $('.rotate').textRotator({
    // These are the defaults.
    animation: 'fadeIn',
    seprator: ',',
    speed: '2000'
  });
});
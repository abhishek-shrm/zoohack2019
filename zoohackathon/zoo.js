const svgPath = document.querySelectorAll('.line1');
var path = anime.path('.line1');

anime({
  targets: '.line1',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});
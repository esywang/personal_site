var $tennis_serve = $('.tennis_serve');

$tennis_serve.on('mouseenter', function () {
  $tennis_serve.get(0).play();
});

$tennis_serve.on('mouseout', function () {
  $tennis_serve.get(0).pause();
});

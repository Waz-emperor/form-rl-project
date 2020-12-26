$('.logf').hide();

$('.log').on('click', function () {
$('.regf').hide();
$('.note').hide();
  $('.logf').fadeIn(300);
  $(".log").css("background","black");
  $(".log").css("color","red");
  $(".reg").css("background","white");
  $(".reg").css("color","black");
});




$('.reg').on('click', function () {
$('.logf').hide();
$('.note').fadeIn(300);
  $('.regf').fadeIn(300);
  $(".reg").css("background","black");
  $(".reg").css("color","red");
  $(".log").css("background","white");
  $(".log").css("color","black");
});
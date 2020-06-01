/****************      scroll top     ***************/
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll > 20) {
    $('.top-header').addClass('active');
  } else {
    $('.top-header').removeClass('active');
  };
});

/************    header slick      **************/
$('.header-slider').slick({
  arrows: false,
  dots: true,
  autoplay: true
});

/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.menu-burger').toggleClass('show');
});

$('.menu-burger a').click(function () {
  $('.menu-burger').removeClass('show');
  $('.burger').removeClass('active');
});
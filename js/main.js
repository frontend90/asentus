/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

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

/***************    WOW     ********************/
new WOW().init();
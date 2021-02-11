$(function () {
  $(".intro__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });
  $(".reviews__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
  });
});

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
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3  
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }      
    ]
  });
  $('.header__menu-btn').on('click', function () {
    $('.menu').slideToggle();
  });
});

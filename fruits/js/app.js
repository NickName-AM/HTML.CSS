$('.image-container').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
});



$('.featured-products').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

$('.category-food').slick({
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 2000,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1300,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
});
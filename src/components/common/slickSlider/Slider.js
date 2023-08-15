import Slider from "react-slick";

function SlickSlider(props) {
  const { dots, slidesToShow, responsive, arrows, children } = props;
  const settings = {
    arrows: arrows,
    dots: dots,
    infinite: true,
    speed: 1500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: responsive === null ? '' : [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      
    ]
    };
  return(
      <Slider {...settings} >
        {children}
      </Slider>
  )
  }

    export default SlickSlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel-item">
          <img
            src="https://theheritageschool.org/banner/KQ5dad5413412f74.40325845.png"
            alt="Event 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://theheritageschool.org/images/intr1.png"
            alt="Event 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://theheritageschool.org/images/new-gallery/post%206%20(2)-min.jpg"
            alt="Event 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

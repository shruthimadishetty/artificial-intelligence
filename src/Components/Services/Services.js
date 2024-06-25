import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css';

import img_1 from "../../assets/services_img_1.jpg";
// import img_2 from "../../assets/services_img_2.jpg";

import img_3 from "../../assets/services_img_3.webp";

import img_4 from "../../assets/services_img_4.gif";

import img_5 from "../../assets/services_img_5.jpg";

import img_6 from "../../assets/services_img_6.gif";

import img_7 from "../../assets/services_img_7.webp";

// import img_8 from "../../assets/services_img_8.jpg";

// import img_9 from "../../assets/services_img_9.jpg";

const Services = () => {
  const images = [
    img_5,
    img_6,
    img_3,
    img_4,
    img_5,
    img_1,
    img_7,
    img_1,
    img_6,
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="slider_container">
    <h1 className="services_heading">SERVICES</h1>
      <div className="services">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div key={image}>
                <img src={image} id="slider" alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Services;

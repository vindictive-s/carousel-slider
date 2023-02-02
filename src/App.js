import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <h2>Carousel Sample</h2>
      <Slider {...settings}>
        <div className="box">
          <h3>1</h3>
        </div>
        <div className="box">
          <h3>2</h3>
        </div>
        <div className="box">
          <h3>3</h3>
        </div>
        <div className="box">
          <h3>4</h3>
        </div>
        <div className="box">
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default App;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './slides/Slide';
import { slides } from '../../types/slider';

const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Infinite loop of slides
  speed: 500, // Speed of transition
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Time interval between slides
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
};

const SlickSlider: React.FC = () => {
  return (
    <Slider {...settings}
      nextArrow={<div style={{ color: 'purple', fontSize: 32 }}>→</div>}
      prevArrow={<div style={{ color: 'purple', fontSize: 32 }}>←</div>}
    >
      {
        slides.map((s, i) => {
          return (
            <div key={i}>
              <Slide slide={s} />
            </div>
          )
        })
      }
    </Slider>
  );
};

export default SlickSlider;

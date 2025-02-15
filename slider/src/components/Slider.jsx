import { useState, useEffect } from "react";

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const images = [ image1 ,  image2 , image3 , image4 , image5];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[activeSlide]})`;
  }, [activeSlide]);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === activeSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <button className="arrow left-arrow" onClick={prevSlide}>
        <i className="fas fa-arrow-left"></i>
      </button>

      <button className="arrow right-arrow" onClick={nextSlide}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Slider;

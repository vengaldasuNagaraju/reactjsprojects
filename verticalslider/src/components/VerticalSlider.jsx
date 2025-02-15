import React, { useState, useRef, useEffect } from "react";

import image1 from '../assets/natureflower.jpg';
import image2 from '../assets/lonelycastle.jpg';
import image3 from '../assets/flyingimage.jpg';
import image4 from '../assets/bluesky.jpg';


const slides = [
  { title: "Nature flower", subtitle: "all in pink", bgColor: "#fd3555", image: image3 },
  { title: "Blue Sky", subtitle: "with in the mountains", bgColor: "#2a86ba", image: image2 },
  { title: "Lonely Castle", subtitle: "in the wilderness", bgColor: "#252e33", image: image4 },
  { title: "Flying Eagle", subtitle: "in the sunset", bgColor: "#ffb866", image: image1 }
];

const VerticalSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderContainerRef = useRef(null);

  const changeSlide = (direction) => {
    let newIndex = activeSlideIndex;
    if (direction === "up") {
      newIndex = (activeSlideIndex + 1) % slides.length;
    } else if (direction === "down") {
      newIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
    }
    setActiveSlideIndex(newIndex);
  };

  useEffect(() => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    document.querySelector(".right-slide").style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    document.querySelector(".left-slide").style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  }, [activeSlideIndex]);

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div className="left-slide" style={{ top: `-${(slides.length - 1) * 100}vh` }}>
        {slides.map((slide, index) => (
          <div key={index} style={{ backgroundColor: slide.bgColor }}>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="right-slide">
        {slides.map((slide, index) => (
          <div key={index} style={{ backgroundImage: `url(${slide.image})` }}></div>
        ))}
      </div>
      <div className="action-buttons">
        <button className="down-button" onClick={() => changeSlide("down")}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button" onClick={() => changeSlide("up")}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default VerticalSlider;

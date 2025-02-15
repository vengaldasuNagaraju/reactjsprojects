import React, { useState } from 'react';

import image1 from '../assets/image30.jpg' 
import image2 from '../assets/image30.jpg'
import image3 from '../assets/image30.jpg'

const ImageCarousel = () => {
    const images = [ image1 , image2 , image3 ];
    
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <div className="image-container" style={{ transform: `translateX(${-index * 500}px)` }}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Slide ${i}`} />
                ))}
            </div>
            <div className="buttons-container">
                <button id="left" className="btn" onClick={prevSlide}>Prev</button>
                <button id="right" className="btn" onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;

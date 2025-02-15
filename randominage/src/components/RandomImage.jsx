import React, { useState, useEffect } from "react";


const API_URL = "https://source.unsplash.com/random?sig="; // Unsplash API with unique signature

const NUM_IMAGES = 30; // Number of images to load

const RandomImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const newImages = Array.from({ length: NUM_IMAGES }, (_, index) => ({
        id: index,
        url: `${API_URL}${Math.random()}`, // Ensure unique images
      }));
      setImages(newImages);
    };

    fetchImages();
  }, []);

  return (
    <>
      <h1 className="title">Random Image Feed</h1>
      <div className="container">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt="Random Unsplash" />
        ))}
      </div>
    </>
  );
};

export default RandomImage;

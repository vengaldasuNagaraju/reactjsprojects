import React, { useState } from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image30 from '../assets/image30.jpg';

const panelsData = [
  { title: "Traveling", backgroundImage: `url(${image1})`},
  { title: "Snow Dog", backgroundImage:  `url(${image2})` },
  { title: "Snow World", backgroundImage:  `url(${image3})` },
  { title: "Monna Cafe", backgroundImage:  `url(${image4})` },
  { title: "Red Sea", backgroundImage: `url(${image30})` }
];

const ExpandingPanels = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      {panelsData.map((panel, index) => (
        <div
          key={index}
          className={`panel ${activeIndex === index ? "active" : ""}`}
          style={{ backgroundImage: panel.backgroundImage }}
          onClick={() => handleClick(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingPanels;

import React, { useState } from "react";

import image1 from '../assets/natureflower.jpg'
import image2 from '../assets/image1.jpg'
import image3 from '../assets/image2.jpg'
import image4 from '../assets/image4.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBox, faBookOpen, faUsers } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { name: "Home", icon: faHome, image: image1 },
  { name: "Work", icon: faBox, image: image2 },
  { name: "Blog", icon: faBookOpen, image: image3 },
  { name: "About Us", icon: faUsers, image: image4 },
];

const MobileNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="phone">
      {tabs.map((tab, index) => (
        <img
          key={index}
          src={tab.image}
          alt={tab.name}
          className={`content ${index === activeIndex ? "show" : ""}`}
        />
      ))}

      <nav>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <p>{tab.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;

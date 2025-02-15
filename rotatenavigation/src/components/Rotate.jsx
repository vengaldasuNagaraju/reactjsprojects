import React, { useState } from "react";
import image from "../assets/image2.jpg";

const Rotate = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={`container ${showNav ? "show-nav" : ""}`}>
        {/* Circle Buttons */}
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={() => setShowNav(false)}>
              <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={() => setShowNav(true)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            corrupti debitis cumque nobis quibusdam quod quaerat, repellendus,
            similique dolorem assumenda...
          </p>
          <h3>My Dog</h3>
          <img src={image} alt="dog" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium soluta vitae odit magni, rerum vel, quos molestiae
            non...
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i> Home
          </li>
          <li>
            <i className="fas fa-user-alt"></i> About
          </li>
          <li>
            <i className="fas fa-envelope"></i> Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Rotate;

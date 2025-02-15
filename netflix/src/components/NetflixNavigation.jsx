import React, { useState } from "react";

import logo from "../assets/netflix.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NetflixNavigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <>
      <button className="nav-btn open-btn" onClick={() => setIsNavVisible(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img src={logo} alt="logo" className="logo" />
      <p className="text">Mobile Navigation</p>

      <div className={`nav nav-black ${isNavVisible ? "visible" : ""}`}>
        <div className={`nav nav-red ${isNavVisible ? "visible" : ""}`}>
          <div className={`nav nav-white ${isNavVisible ? "visible" : ""}`}>
            <button
              className="nav-btn close-btn"
              onClick={() => setIsNavVisible(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={logo} alt="logo" className="logo" />
            <ul className="list">
              <li><a href="#">Teams</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Life at Netflix</a></li>
              <li>
                <ul>
                  <li><a href="#">Netflix culture memo</a></li>
                  <li><a href="#">Work life balance</a></li>
                  <li><a href="#">Inclusion & diversity</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetflixNavigation;

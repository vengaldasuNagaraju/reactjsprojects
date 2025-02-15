import React, { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={isActive ? "nav active" : "nav"} id="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="icon" id="toggle" onClick={() => setIsActive(!isActive)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default NavBar;

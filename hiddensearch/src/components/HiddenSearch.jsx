import React, { useState } from "react";

const HiddenSearch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`search ${isActive ? "active" : ""}`}>
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn" onClick={toggleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default HiddenSearch;

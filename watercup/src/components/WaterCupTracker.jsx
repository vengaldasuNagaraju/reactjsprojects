import { useState } from "react";

const WaterCupTracker = () => {
  const totalCups = 8;
  const cupSize = 250; // in ml
  const goal = 2000; // 2 Liters in ml

  const [filledCups, setFilledCups] = useState(0);

  const handleCupClick = (idx) => {
    if (filledCups === idx + 1 && filledCups !== totalCups) {
      setFilledCups(idx);
    } else {
      setFilledCups(idx + 1);
    }
  };

  const percentage = (filledCups / totalCups) * 100;
  const remainingLiters = (goal - filledCups * cupSize) / 1000;

  return (
        <div className="water-container">
          <h1>Drink Water</h1>
          <h3>Goal: 2 Liters</h3>
          
          <div className="cup">
            <div
              className="remained"
              id="remained"
              style={{ visibility: filledCups === totalCups ? "hidden" : "visible" }}
            >
              <span id="liters">{remainingLiters}L</span>
              <small>Remained</small>
            </div>
            <div
              className="percentage"
              id="percentage"
              style={{ height: filledCups === totalCups ? "100%" : `${(percentage * 330) / 100}px`,
               visibility: filledCups === 0 ? "hidden" : "visible" }}
            >
              {percentage}%
            </div>
          </div>
          
          <p className="text">Select how many glasses of water you have drank</p>
          
          <div className="cups">
            {[...Array(totalCups)].map((_, idx) => (
              <div
                key={idx}
                className={`cup cup-small ${idx < filledCups ? "full" : ""}`}
                onClick={() => handleCupClick(idx)}
              >
                250ml
              </div>
            ))}
          </div>
        </div>
      );
};

export default WaterCupTracker;

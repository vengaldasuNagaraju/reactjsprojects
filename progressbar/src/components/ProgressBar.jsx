import React, { useState } from "react";

const ProgressBar = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const totalSteps = 4;

  const updateProgress = () => {
    return ((currentActive - 1) / (totalSteps - 1)) * 100 + "%";
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={{ width: updateProgress() }}></div>
        {[...Array(totalSteps)].map((_, idx) => (
          <div
            key={idx}
            className={`circle ${idx + 1 <= currentActive ? "active" : ""}`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => setCurrentActive((prev) => Math.max(prev - 1, 1))}
        disabled={currentActive === 1}
      >
        Prev
      </button>
      <button
        className="btn"
        onClick={() => setCurrentActive((prev) => Math.min(prev + 1, totalSteps))}
        disabled={currentActive === totalSteps}
      >
        Next
      </button>
    </div>
  );
};

export default ProgressBar;

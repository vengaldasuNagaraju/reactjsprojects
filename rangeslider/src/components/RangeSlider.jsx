import React, { useState, useRef, useEffect } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(50); // Default value
  const rangeRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (rangeRef.current && labelRef.current) {
      const rangeWidth = parseFloat(getComputedStyle(rangeRef.current).width);
      const labelWidth = parseFloat(getComputedStyle(labelRef.current).width);

      const max = rangeRef.current.max;
      const min = rangeRef.current.min;

      const left =
        (value * (rangeWidth / max)) - (labelWidth / 2) + scale(value, min, max, 10, -10);

      labelRef.current.style.left = `${left}px`;
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <div className="range-container">
      <input
        type="range"
        id="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        ref={rangeRef}
      />
      <label htmlFor="range" ref={labelRef}>
        {value}
      </label>
    </div>
  );
};

export default RangeSlider;

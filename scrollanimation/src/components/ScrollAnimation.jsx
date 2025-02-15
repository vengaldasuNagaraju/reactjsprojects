import React, { useEffect, useRef } from "react";

const ScrollAnimation = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxesRef.current.forEach((box) => {
        if (box) {
          const boxTop = box.getBoundingClientRect().top;
          if (boxTop < triggerBottom) {
            box.classList.add("show");
          } else {
            box.classList.remove("show");
          }
        }
      });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  return (
    <div className="container">
      <h1>Scroll to see animation</h1>
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="box"
          ref={(el) => (boxesRef.current[index] = el)}
        >
          <h2>Content {index + 1}</h2>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;

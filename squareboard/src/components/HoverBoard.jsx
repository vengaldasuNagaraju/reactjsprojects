import { useEffect } from "react";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

const HoverBoard = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    
    for (let i = 0; i < SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      
      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseout", () => removeColor(square));
      
      container.appendChild(square);
    }
  }, []);

  const setColor = (element) => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = (element) => {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return <div id="container"></div>;
};

export default HoverBoard;

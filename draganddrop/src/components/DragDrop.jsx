import React, { useState } from "react";

const DragDrop = () => {
  const [currentFill, setCurrentFill] = useState(null);

  const dragStart = (e) => {
    setCurrentFill(e.target);
    e.target.classList.add("hold");
    setTimeout(() => (e.target.className = "invisible"), 0);
  };

  const dragEnd = (e) => {
    e.target.className = "fill";
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.currentTarget.className = "empty";
  };

  const dragDrop = (e) => {
    e.currentTarget.className = "empty";
    if (currentFill) {
      e.currentTarget.appendChild(currentFill);
    }
  };

  return (
    <>
      <div className="empty">
        <div
          className="fill"
          draggable="true"
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        ></div>
      </div>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="empty"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={dragDrop}
        ></div>
      ))}
    </>
  );
};

export default DragDrop;

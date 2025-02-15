import React, { useState } from "react";
import classes from "./DoubleClick.module.css";

const DoubleClick = () => {

  const [timesClicked, setTimesClicked] = useState(0);

  const [clickTime, setClickTime] = useState(0);

  const [hearts, setHearts] = useState([]);

  const handleClick = (e) => {

    if (clickTime === 0) {

      setClickTime(new Date().getTime());

    } else {

      if (new Date().getTime() - clickTime < 800) {

        createHeart(e);

        setClickTime(0);

      } else {

        setClickTime(new Date().getTime());

      }
    }
  };

  const createHeart = (e) => {

    const loveMeRect = e.currentTarget.getBoundingClientRect();
    const xInside = e.clientX - loveMeRect.left;
    const yInside = e.clientY - loveMeRect.top;

    const newHeart = { id: Date.now(), x: xInside, y: yInside };
    setHearts([...hearts, newHeart]);
    setTimesClicked((prev) => prev + 1);

    setTimeout(() => {
      setHearts((currentHearts) =>
        currentHearts.filter((heart) => heart.id !== newHeart.id)
      );
    }, 6000);
  };

  return (
    <div className={classes.container}>
      <h3>
        Double click on the image to <i className="fas fa-heart"></i> it
      </h3>
      <small>
        You liked it <span id="times">{timesClicked}</span> times
      </small>
      <div className={classes.loveMe} onClick={handleClick}>
        {hearts.map((heart) => (
          <i
            key={heart.id}
            className="fas fa-heart"
            style={{ top: `${heart.y}px`, left: `${heart.x}px` }}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default DoubleClick;

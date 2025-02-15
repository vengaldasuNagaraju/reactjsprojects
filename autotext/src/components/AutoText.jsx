import classes from './AutoText.module.css';
import { useState, useEffect, useRef } from "react";

const AutoText = () => {
  const [text, setText] = useState("Starting ...");
  const [speed, setSpeed] = useState(1); // Set minimum speed to 1
  const fullText = "We Love Programming!";
  const idxRef = useRef(1); // Use useRef to persist index

  useEffect(() => {
    let timer;

    const writeText = () => {
      setText(fullText.slice(0, idxRef.current));
      idxRef.current++;

      if (idxRef.current > fullText.length) {
        idxRef.current = 1;
      }

      timer = setTimeout(writeText, 300 / speed);
    };

    writeText();

    return () => clearTimeout(timer); // Cleanup function to prevent multiple timers
  }, [speed]);

  return (
    <div className={classes.container}>
      <h1 className={classes.text}>{text}</h1>
      <div className={classes.control}>
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          id="speed"
          value={speed}
          min="1"
          max="5"
          step="1"
          onChange={(e) => setSpeed(Math.max(1, Number(e.target.value)))
          }
        />
      </div>
    </div>
  );
};

export default AutoText;

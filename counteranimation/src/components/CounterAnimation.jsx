import { useEffect, useState } from "react";

const CounterAnimation = () => {
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const numbers = ["3", "2", "1", "0"];

  useEffect(() => {
    if (index < numbers.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowFinal(true);
    }
  }, [index]);

  const resetAnimation = () => {
    setIndex(0);
    setShowFinal(false);
  };

  return (
    <div>
      {!showFinal ? (
        <div className={`counter ${index >= numbers.length ? "hide" : ""}`}>
          <div className="nums">
            {numbers.map((num, i) => (
              <span
                key={i}
                className={i === index ? "in" : i < index ? "out" : ""}
              >
                {num}
              </span>
            ))}
          </div>
          <h4>Get Ready</h4>
        </div>
      ) : (
        <div className="final show">
          <h1>Go</h1>
          <button id="replay" onClick={resetAnimation}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
};

export default CounterAnimation;

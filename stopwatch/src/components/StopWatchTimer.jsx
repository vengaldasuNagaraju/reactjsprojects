import { useState, useEffect } from "react";

const totalSeconds = 60;

const StopwatchTimer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(totalSeconds);

  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      setCurrentSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          resetAll();
          return totalSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [playing]);

  // Function to calculate degrees for progress arc
  const calcDeg = () => `${(1 - currentSeconds / totalSeconds) * 360}deg`;

  // Reset timer
  const resetAll = () => {
    setPlaying(false);
    setCurrentSeconds(totalSeconds);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const newSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${newSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-sm text-center flex flex-col items-center">
      <h1 className="text-white text-3xl mb-4">Timer</h1>

      {/* Circle Timer */}
      <div className="relative w-60 h-60 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0.2"
          />
        </svg>

        {/* Progress Arc */}
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(white ${calcDeg()}, transparent ${calcDeg()})`,
          }}
        ></div>

        {/* Timer Text */}
        <p className="text-blue-200 text-5xl relative z-10">
          {formatTime(currentSeconds)}
        </p>

        {/* Hand Marker (White Dot) */}
        <div
          className="absolute w-3 h-3 bg-white rounded-full"
          style={{
            top: "2px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-6">
        <button
          className="flex justify-center items-center w-12 h-12 bg-blue-400 rounded-full text-black shadow-md"
          onClick={resetAll}
        >
          <i className="fa-solid fa-rotate"></i>
        </button>

        <button
          className={`flex justify-center items-center w-12 h-12 rounded-full text-black shadow-md ${
            playing ? "bg-green-500" : "bg-blue-400"
          }`}
          onClick={() => setPlaying((prev) => !prev)}
        >
          <i className={`fas ${playing ? "fa-pause" : "fa-play"}`}></i>
        </button>
      </div>
    </div>
  );
};

export default StopwatchTimer;

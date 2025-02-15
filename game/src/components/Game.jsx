import { useState, useEffect } from "react";

import fly from "../assets/fly.png";
import mosquito from "../assets/mosquito.png";
import spider from "../assets/spider.png";
import roach from "../assets/roach.png";

const insectImages = { fly, mosquito, spider, roach };

function Game() {
  const [screen, setScreen] = useState(0);
  const [selectedInsect, setSelectedInsect] = useState(null);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [insects, setInsects] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer;
    if (screen === 2 && !gameOver) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [screen, gameOver]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const getRandomLocation = () => ({
    x: Math.random() * (window.innerWidth - 200) + 100,
    y: Math.random() * (window.innerHeight - 200) + 100,
  });

  const addInsect = () => {
    if (gameOver) return;
    const { x, y } = getRandomLocation();
    setInsects((prev) => [
      ...prev,
      { id: Date.now(), x, y, rotation: Math.random() * 360 },
    ]);
  };

  const catchInsect = (id) => {
    if (gameOver) return;

    setScore((s) => s + 1);
    setInsects((prev) => prev.filter((insect) => insect.id !== id));

    if (score + 1 <= 40) {
      setTimeout(addInsect, 1000);
      setTimeout(addInsect, 1500);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div>
      {screen === 0 && (
        <div className="screen">
          <h1>Catch The Insect</h1>
          <button className="btn" onClick={() => setScreen(1)}>
            Play Game
          </button>
        </div>
      )}

      {screen === 1 && (
        <div className="screen">
          <h1>What is your favorite insect?</h1>
          <ul className="insects-list">
            {Object.keys(insectImages).map((insect) => (
              <li key={insect}>
                <button
                  className="choose-insect-btn"
                  onClick={() => {
                    setSelectedInsect(insect);
                    setScreen(2);
                    setTimeout(addInsect, 1000);
                  }}
                >
                  <p>{insect.charAt(0).toUpperCase() + insect.slice(1)}</p>
                  <img src={insectImages[insect]} alt={insect} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {screen === 2 && (
        <div className="screen game-container">
          <h3 className="time">Time: {formatTime()}</h3>
          <h3 className="score">Score: {score}</h3>

          {score === 20 && (
            <h5 className="message visible">
              You reached 20 points! Keep going!
            </h5>
          )}

          {score > 40 && (
            <h5 className="message visible" style={{ color: "red" }}>
              Game Over! You exceeded the limit.
            </h5>
          )}

          {insects.map((insect) => (
            <div
              key={insect.id}
              className="insect"
              style={{
                top: `${insect.y}px`,
                left: `${insect.x}px`,
                transform: `rotate(${insect.rotation}deg)`,
              }}
              onClick={() => catchInsect(insect.id)}
            >
              <img src={insectImages[selectedInsect]} alt={selectedInsect} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Game;

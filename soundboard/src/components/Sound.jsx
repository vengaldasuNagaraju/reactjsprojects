import { useState } from "react";



const sounds = ["appclause", "boo", "gasp", "tada", "victory"];

const Sound = () => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playSound = (sound) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const newAudio = document.getElementById(sound);
    newAudio.play();
    setCurrentAudio(newAudio);
  };

  return (
    <div className="container">
      {sounds.map((sound) => (
        <button key={sound} className="btn" onClick={() => playSound(sound)}>
          {sound}
        </button>
      ))}

      {sounds.map((sound) => (
        <audio key={sound} id={sound} src={`audio/${sound}.mp3`}></audio>
      ))}
    </div>
  );
};

export default Sound;

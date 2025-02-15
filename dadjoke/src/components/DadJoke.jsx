import React, { useState, useEffect } from "react";
import classes from './DadJoke.module.css'

const DadJoke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={classes.container}>
        <h3>Don't Laugh Challenge</h3>
        <div className={classes.joke}>
          {joke || "Loading..."}
        </div>
        <button
          className={classes.btn}
          onClick={fetchJoke}
        >
          Get Another Joke
        </button>
      </div>
  );
};

export default DadJoke;

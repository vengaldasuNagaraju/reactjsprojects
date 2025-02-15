import { useState, useEffect } from "react";

const RandomChoicePicker = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [highlightedTag, setHighlightedTag] = useState(null);

  useEffect(() => 
    {
        if (input.includes(",")) {
        const newTags = input
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");
        setTags(newTags);
        }
    },[input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInput("");
      randomSelect();
    }
  };

  const randomSelect = () => {
    const times = 30;
    let count = 0;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      setHighlightedTag(randomTag);
      setTimeout(() => {
        setHighlightedTag(null);
      }, 100);
      count++;
      if (count >= times) {
        clearInterval(interval);
        setTimeout(() => {
          setHighlightedTag(pickRandomTag());
        }, 100);
      }
    }, 100);
  };

  const pickRandomTag = () => {
    if (tags.length === 0) return null;
    return tags[Math.floor(Math.random() * tags.length)];
  };

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (",").
        <br /> Press enter when you are done.
      </h3>
      <textarea
        className="textarea"
        placeholder="Enter choices here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag ${
              highlightedTag === tag ? "highlight" : ""
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RandomChoicePicker;

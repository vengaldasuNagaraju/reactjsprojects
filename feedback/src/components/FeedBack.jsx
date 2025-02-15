import { useState } from "react";

import unhappy from '../assets/unhappy.png'; // Import images correctly
import neutral from '../assets/neutral.png';
import satisfied from '../assets/satisfied.png';

const FeedBack = () => {
  const [selectedRating, setSelectedRating] = useState("No Feedback");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratings = [
    { id: 1, text: "Unhappy", img: unhappy },
    { id: 2, text: "Neutral", img: neutral },
    { id: 3, text: "Satisfied", img: satisfied },
  ];

  const handleSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div id="panel" className="panel-container">
      {isSubmitted ? (
        <>
          <i className="fas fa-heart"></i>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {selectedRating}</strong>
          <p>We'll use your feedback to improve our customer support.</p>
        </>
      ) : (
        <>
          <strong>
            How satisfied are you with our <br />
            customer support performance?
          </strong>
          <div className="ratings-container">
            {ratings.map((rating) => (
              <div
                key={rating.id}
                className={`rating ${selectedRating === rating.text ? "active" : ""}`}
                onClick={() => handleSelect(rating.text)}
              >
                <img src={rating.img} alt={rating.text} />
                <small>{rating.text}</small>
              </div>
            ))}
          </div>
          <button className="btn" id="send" onClick={handleSubmit}>
            Send Review
          </button>
        </>
      )}
    </div>
  );
};

export default FeedBack;

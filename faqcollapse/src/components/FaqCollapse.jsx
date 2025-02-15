import React, { useState } from "react";

const faqData = [
  { question: "Why shouldn't we trust atoms?", answer: "They make up everything." },
  { question: "How do you organize a space party?", answer: "You planet!" },
  { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
  { question: "Why don't skeletons fight each other?", answer: "They don't have the guts." }
];

const FAQCollapse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq ${activeIndex === index ? "active" : ""}`}
          >
            <h3 className="faq-title">{faq.question}</h3>
            <p className="faq-text">{faq.answer}</p>
            <button className="faq-toggle" onClick={() => toggleFAQ(index)}>
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCollapse;

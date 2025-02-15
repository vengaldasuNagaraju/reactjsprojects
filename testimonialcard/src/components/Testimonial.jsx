import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a top-notch designer and front-end developer. He communicates well, works fast, and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Emma Williams",
    position: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "A highly skilled developer with an eye for design! The work was delivered quickly and exceeded expectations. Highly recommend!",
  },
  {
    name: "Liam Carter",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Incredible attention to detail and a deep understanding of front-end development. Working together has been an absolute pleasure!",
  },
  {
    name: "Sophia Brown",
    position: "Project Manager",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "A true professional! Communication was seamless, and the quality of work was outstanding. Looking forward to future collaborations!",
  },
  {
    name: "Oliver Green",
    position: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    text: "One of the best developers I have worked with. Delivers on time, solves problems efficiently, and has a great sense of design!",
  },
  {
    name: "Ava Johnson",
    position: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Top-notch service! Creative, reliable, and always delivers exceptional results. Would definitely work together again!",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { name, position, photo, text } = testimonials[index];

  return (
    <div className="testimonial-container">
      <div className="progress-bar" />
      <div className="fas fa-quote-right fa-quote"></div>
      <div className="fas fa-quote-left fa-quote"></div>
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt={name} className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <h4 className="role">{position}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

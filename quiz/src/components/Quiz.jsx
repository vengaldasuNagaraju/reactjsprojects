import React, { useState } from "react";
const quizData = [
  {
    question: "What is OOP in Java?",
    a: "Object Oriented Programming",
    b: "Object Outdated Program",
    c: "Oriented Object Program",
    d: "Object of Program",
    correct: "a",
  },
  {
    question: "What is the main principle of OOP in Java?",
    a: "Encapsulation, Inheritance, Polymorphism, Abstraction",
    b: "Encapsulation, Compilation, Execution, Debugging",
    c: "Encapsulation, Object, Package, Method",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which feature of OOP allows the same method name for different implementations?",
    a: "Encapsulation",
    b: "Abstraction",
    c: "Polymorphism",
    d: "Inheritance",
    correct: "c",
  },
  {
    question: "Which keyword is used for inheritance in Java?",
    a: "extends",
    b: "implements",
    c: "inherits",
    d: "super",
    correct: "a",
  },
  {
    question: "What is encapsulation in Java?",
    a: "Hiding the implementation details and exposing only necessary parts",
    b: "Binding two classes together",
    c: "Overriding methods in child class",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which of the following is NOT a pillar of OOP?",
    a: "Abstraction",
    b: "Encapsulation",
    c: "Compilation",
    d: "Polymorphism",
    correct: "c",
  },
  {
    question: "What is an object in Java?",
    a: "A template for creating classes",
    b: "An instance of a class",
    c: "A function",
    d: "A primitive data type",
    correct: "b",
  },
  {
    question: "Which access specifier allows access within the same package?",
    a: "private",
    b: "protected",
    c: "default",
    d: "public",
    correct: "c",
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    a: "private",
    b: "protected",
    c: "static",
    d: "final",
    correct: "d",
  },
  {
    question: "What does the 'super' keyword refer to?",
    a: "The child class",
    b: "The parent class",
    c: "The current instance",
    d: "A static method",
    correct: "b",
  },
];

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      setScore(score + 1);
    }
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {finished ? (
        <div className="quiz-header">
          <h2>
            You answered {score} out of {quizData.length} questions correctly!
          </h2>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="quiz-header">
          <h2>{quizData[currentQuiz].question}</h2>
          <ul>
            {Object.entries(quizData[currentQuiz]).map(
              ([key, value]) =>
                key !== "question" && key !== "correct" && (
                  <li key={key}>
                    <input
                      type="radio"
                      id={key}
                      name="answer"
                      value={key}
                      checked={selectedAnswer === key}
                      onChange={handleAnswerSelect}
                    />
                    <label htmlFor={key}>{value}</label>
                  </li>
                )
            )}
          </ul>
          <button onClick={handleSubmit} disabled={!selectedAnswer}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

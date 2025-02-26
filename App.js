import React, { useState } from 'react';
import "./App.css";

const questions = [
  { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"], correct: 0 },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
  { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
  { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Leo Tolstoy"], correct: 2 },
  { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
  { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2 },
  { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], correct: 2 },
  { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"], correct: 0 },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], correct: 0 },
];

const Question = ({ questionData, currentQuestionIndex, onAnswer }) => {
  const handleAnswer = (index) => {
    onAnswer(index);
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{questionData.question}</p>
      <div>
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Results = ({ questions, userAnswers }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p><strong>Question {index + 1}:</strong> {q.question}</p>
          <p><strong>Your Answer:</strong> {q.options[userAnswers[index]]}</p>
          <p>
            <strong>Correct Answer:</strong> {q.options[q.correct]}
          </p>
          <p>
            {userAnswers[index] === q.correct ? "Correct" : "Wrong"}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div style={{ padding: "20px" }} className='container'>
      <h1>Quiz App</h1>
      {!isQuizFinished ? (
        <Question
          questionData={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      ) : (
        <Results questions={questions} userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;

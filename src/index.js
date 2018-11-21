import React from "react";
import ReactDOM from "react-dom";

import QuizComponent from "../components/QuizComponent";

import "./styles.css";

const quizData = [
  {
    question: "1. Which iPhone device you want?",
    answers: ["iPhone 8", "iPhone X", "iPhone Xs", "iPhone Xr"]
  },
  {
    question: "2. Which device capacity you want?",
    answers: ["32 GB", "64 GB", "128 GB", "256 GB"]
  },
  {
    question: "3. Which device finsh you want?",
    answers: ["White", "Silver"]
  }
];

function QuizResult({ answers }) {
  return (
    <div>
      <h1>Thank you for your answers!</h1>
      {/*{JSON.stringify(answers, null, 2)}*/}
      <div>Device: {answers[0]}</div>
      <div>Capacity: {answers[1]}</div>
      <div>Color: {answers[2]}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Quiz Component</h1>
      <QuizComponent quizDetails={quizData} ResultPhaseComponent={QuizResult} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

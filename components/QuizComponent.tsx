import * as React from "react";

import "./QuizComponent.css";

class QuizPhase extends React.PureComponent {
  state = {
    answers: [],
    currentQuestionIndex: 0
  };

  handleAnswer(answer) {
    console.log(answer);
    this.setState(
      {
        answers: this.state.answers.concat([answer]),
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      },
      () => {
        if (this.state.currentQuestionIndex == this.props.quizDetails.length) {
          this.props.onEnd(this.state.answers);
        }
      }
    );
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className={`quizPanel currentQuestionIndex-${this.state
          .currentQuestionIndex + 1}`}
      >
        <div className="counter">
          Question&nbsp;
          <span className="numberQuiz">
            {this.state.currentQuestionIndex + 1}
          </span>
          &nbsp; of &nbsp;
          <span className="totalQuiz">{this.props.quizDetails.length}</span>
        </div>
        {this.props.quizDetails.map((questionData, index) => {
          return (
            <div
              className={`question currentQuestionIndex-${index + 1} ${
                this.state.currentQuestionIndex == index ? "visible" : "hidden"
              }`}
              key={index.toString()}
            >
              <div>{questionData.question}</div>
              {questionData.answers.map((answerData, answerIndex) => (
                <button
                  key={answerIndex.toString()}
                  onClick={() => this.handleAnswer(answerData)}
                >
                  {answerData}
                </button>
              ))}
              {/*<pre>{JSON.stringify(questionData.answers)}</pre>*/}
            </div>
          );
        })}
      </div>
    );
  }
}

export default class extends React.PureComponent {
  state = {
    phase: "quiz",
    answers: []
  };
  render() {
    return (
      <div className="quiz-container">
        <div
          className={`quiz-phase ${
            this.state.phase == "quiz" ? "visible" : "hidden"
          }`}
        >
          <QuizPhase
            quizDetails={this.props.quizDetails}
            onEnd={answers => {
              this.setState({ phase: "result", answers: answers });
            }}
          />
        </div>

        <div
          className={`quiz-phase ${
            this.state.phase == "result" ? "visible" : "hidden"
          }`}
        >
          <this.props.ResultPhaseComponent answers={this.state.answers} />
        </div>
      </div>
    );
  }
}

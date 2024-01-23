import React from "react";

export default function Option({ question, dispatch, answer }) {
  const hasAnswered = (answer = answer !== null);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "ANSWER", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

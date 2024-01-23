import React from "react";

export default function NextButton({ dispatch, answer, numQuestions, index }) {
  console.log(index, numQuestions);
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "NEXT" })}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "FINISH" })}
      >
        Finish
      </button>
    );
}

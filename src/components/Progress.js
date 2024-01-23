import React from "react";

export default function Progress({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        // If answer is not null, this expression evaluates to true, which is equivalent to the number 1 in JavaScript. If answer is null, this expression evaluates to false, which is equivalent to the number 0 in JavaScript due to the implicit type conversion.

        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

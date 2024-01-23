import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "👏";
  else if (percentage >= 80) emoji = "👍";
  else if (percentage >= 60) emoji = "🙂";
  else emoji = "👎";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage.toFixed(2)}%)
      </p>
      <p className="highscore">
        {highScore}: {highScore} points
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

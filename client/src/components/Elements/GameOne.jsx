import React from "react";
import Loading from "./Loading";

const GameOne = ({ randomQuestion, compareGuess }) => {
  return (
    <>
      {randomQuestion ? (
        <>
          <div>{randomQuestion.question}</div>
          <div className="answers">
            <button
              onClick={() => compareGuess(true)}
              style={{ order: Math.floor(Math.random() * 4) }}
              className="guess-btn game-1-button"
            >
              {randomQuestion.correct_answer}
            </button>
            {randomQuestion.incorrect_answers.map((answer, index) => (
              <button
                onClick={() => compareGuess(false, index)}
                className="guess-btn game-1-button"
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GameOne;

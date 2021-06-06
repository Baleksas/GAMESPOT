import React from "react";
import Typing from "react-typing-animation";

const Rules = ({ game, setReadRules, readRules }) => {
  const read = () => {
    setReadRules([...readRules, game]);
  };
  return (
    <div className="rules">
      <div className="rules-container">
        <div>
          <h1>Rules</h1>
          <ul className="rules-ul">
            <li>
              {game === "movies"
                ? "Try to guess IMDB of the described movie"
                : "..."}
            </li>
            <li>
              {game === "movies" ? "There is leverage of one score" : "..."}
            </li>
            <li>{game === "movies" ? "You have three lifes" : "..."}</li>
          </ul>
        </div>
        <div>
          <h1>Goal</h1>
          <span>
            {" "}
            {game === "movies"
              ? "Try to guess as many movies IMDB as you can"
              : "..."}
          </span>
        </div>
      </div>
      <button className="rules-btn" onClick={read}>
        GOT IT
      </button>
    </div>
  );
};

export default Rules;

import React from "react";

const Rules = ({ game, setReadRules, readRules }) => {
  const read = () => {
    setReadRules([...readRules, game]);
  };
  return (
    <div>
      <div className="rules-container">
        <h1>Rules</h1>
        <ul>
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
        <h2>Goal</h2>
        <span>
          {" "}
          {game === "movies"
            ? "Try to guess as many movies IMDB as you can"
            : "..."}
        </span>
      </div>
      <button onClick={read}>GOT IT</button>
    </div>
  );
};

export default Rules;

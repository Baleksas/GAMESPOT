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
                : "Try to guess the right answer"}
            </li>
            <li>
              {game === "movies" ? (
                <>
                  <span>Inaccuracy</span>
                  <br />
                  <table>
                    <tr>
                      <th>Leverage</th>
                      <th>Score/Life</th>
                    </tr>
                    <tr>
                      <td>{`>`}1</td>
                      <td>-&#9825;</td>
                    </tr>
                    <tr>
                      <td>0.5-1</td>
                      <td>+1</td>
                    </tr>
                    <tr>
                      <td>0.2-0.5</td>
                      <td>+2</td>
                    </tr>
                    <tr>
                      <td>0.1-0.2</td>
                      <td>+3</td>
                    </tr>
                    <tr>
                      <td>0/Bullzye</td>
                      <td>+10</td>
                    </tr>
                  </table>
                </>
              ) : (
                "You will see the right answer below after each question"
              )}
            </li>
            <li>You have 3 lifes</li>
          </ul>
        </div>
        <div>
          <h1>Goal</h1>
          <span className="goal">
            {" "}
            {game === "movies"
              ? "Try to guess as many movies IMDBs as you can"
              : "Try to get as many points as you can"}
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

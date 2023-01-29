import React from "react";
import CSQuiz from "../../img/CSQuiz.gif";
import Movies from "../../img/Movies.gif";
import Other from "../../img/Background.gif";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-text">
        <p>"{review.message}"</p>
        <span>- {review.author}</span>
      </div>
      <div className="review-game">
        <div className="game-icon">
          {review.game === "CSQuiz" && (
            <div className="game-review-box">
              <img src={CSQuiz} alt="CSQuiz" />
              <span>CSQuiz</span>
            </div>
          )}
          {review.game === "movies" && (
            <div className="game-review-box">
              <img src={Movies} alt="movies" />
              <span>MOVIES</span>
            </div>
          )}
          {review.game === "other" && (
            <div className="game-review-box">
              <img src={Other} alt="Other" />
              <span>OTHER</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;

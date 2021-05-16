import React from "react";
import Dino from "../../img/Dino.jpg";
import M_sweeper from "../../img/M-sweeper.png";
import Other from "../../img/Background.gif";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-text">
        <p>{review.message}</p>
        <span>- {review.author}</span>
      </div>
      <div className="review-game">
        <div className="game-icon">
          {review.game === "dino" && <img src={Dino} alt="Dino" />}
          {review.game === "m-sweeper" && (
            <img src={M_sweeper} alt="M-sweeper" />
          )}
          {review.game === "other" && <img src={Other} alt="Other" />}
        </div>
      </div>
    </div>
  );
};

export default Review;

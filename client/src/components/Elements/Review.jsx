import React from "react";
import Dino from "../../img/Dino.jpg";
const Review = () => {
  return (
    <div className="review">
      <div className="review-text">
        <p>ME LIKEY LIKEY</p>
        <span>- Saul Goodman</span>
      </div>
      <div className="review-game">
        <div className="game-icon">
          <img src={Dino} alt="Dino" />
        </div>
        <span>-Console</span>
      </div>
    </div>
  );
};

export default Review;

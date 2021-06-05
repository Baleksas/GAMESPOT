import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../actions/reviews";
const Form = ({ name }) => {
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    author: name,
    message: "",
    game: "dino",
    maxScore: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(reviewData));
    // Clearing form

    setReviewData({
      author: name,
      message: "",
      game: "dino",
      maxScore: 0,
    });
  };
  return (
    <div className="review">
      <div className="review-text">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <input
            value={reviewData.message}
            onChange={(e) =>
              setReviewData({ ...reviewData, message: e.target.value })
            }
            value={reviewData.message}
            name="message"
            type="text"
            placeholder="message"
          />

          <select
            value={reviewData.game}
            onChange={(e) =>
              setReviewData({ ...reviewData, game: e.target.value })
            }
            name="game"
            id="select_Game"
          >
            <option value="dino">Dino</option>
            <option value="movies">movies</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" value="DONE" />
        </form>
      </div>
    </div>
  );
};

export default Form;

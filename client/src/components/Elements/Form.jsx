import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../actions/reviews";
const Form = () => {
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    author: "",
    message: "",
    game: "dino",
    maxScore: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(reviewData));
    // Clearing form

    setReviewData({
      author: "",
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
          <input
            value={reviewData.author}
            onChange={(e) =>
              setReviewData({ ...reviewData, author: e.target.value })
            }
            value={reviewData.author}
            name="author"
            type="text"
            placeholder="author"
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
            <option value="m-sweeper">M-sweeper</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" value="DONE" />
        </form>
      </div>
    </div>
  );
};

export default Form;

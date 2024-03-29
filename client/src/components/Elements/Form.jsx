import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../actions/reviews";
import { CensorSensor } from "censor-sensor";
import AlertBox from "./AlertBox";

const Form = ({ name }) => {
  const dispatch = useDispatch();
  const censor = new CensorSensor();
  const [inputError, setInputError] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [reviewData, setReviewData] = useState({
    author: name,
    message: "",
    game: "CSQuiz",
    maxScore: 0,
  });
  const checkIfAppropriate = (reviewData) => {
    if (reviewData.message === "" || reviewData.message === undefined) {
      setInputError("Too short!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return true;
    }

    if (censor.isProfane(reviewData.message)) {
      setInputError("Bad word!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfAppropriate(reviewData)) {
      setReviewData({ ...reviewData, message: "" });
      return;
    }
    dispatch(createReview(reviewData));
    // Clearing form
    setReviewData({
      author: name,
      message: "",
      game: "CSQuiz",
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
            <option value="CSQuiz">CSQuiz</option>
            <option value="movies">movies</option>
            <option value="web-app">Web app</option>
          </select>
          <button className="no-name-btn">DONE</button>
        </form>
      </div>
      <AlertBox type="review-alert" error={inputError} show={showAlert} />
    </div>
  );
};

export default Form;

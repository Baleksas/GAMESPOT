import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Review from "../Elements/Review";
import { useSelector } from "react-redux";
import Form from "../Elements/Form";
import Loading from "../Elements/Loading";
import { getReviews } from "../../actions/reviews";
import { useDispatch } from "react-redux";

const Reviews = ({ name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  let reviews = useSelector((state) => state.reviews);
  console.log(reviews);

  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrapper">
        <div className="reviews-grid">
          {!reviews.length ? (
            <Loading />
          ) : (
            reviews.map((review) => <Review key={review._id} review={review} />)
          )}
          <Form name={name} />
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;

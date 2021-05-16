import React from "react";
import { motion } from "framer-motion";
import Review from "../Elements/Review";
import { useSelector } from "react-redux";
import Form from "../Elements/Form";
import Loading from "../Elements/Loading";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
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
          <Form />
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;

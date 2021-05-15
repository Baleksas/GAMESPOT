import React from "react";
import { motion } from "framer-motion";
import Review from "../Elements/Review";
import { useSelector } from "react-redux";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
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
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;

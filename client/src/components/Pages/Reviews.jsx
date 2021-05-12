import React from "react";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      Rev
    </motion.section>
  );
};

export default Reviews;

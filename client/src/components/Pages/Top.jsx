import React from "react";
import { motion } from "framer-motion";

const Top = () => {
  return (
    <motion.section
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      Top
    </motion.section>
  );
};

export default Top;

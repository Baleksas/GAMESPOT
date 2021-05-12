import React from "react";
import { motion } from "framer-motion";

const Dino = () => {
  return (
    <motion.section
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div id="dino" className="dino">
        Dino
      </div>
    </motion.section>
  );
};

export default Dino;
const dino = document.getElementById("dino");

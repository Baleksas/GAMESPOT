import React, { useState, createContext } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Dino = ({ name }) => {
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [score, setScore] = useState(0);
  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "dino",
  });
  const increment = () => {
    setScore(score + 1);
    setTopData({ ...topData, maxScore: score + 1 });
  };
  const checkIfTop = () => {
    if (tops.length < 3) dispatch(createTop(topData));
    else {
      for (var i = 0; i < 3; i++) {
        if (topData.maxScore > tops[i].maxScore) {
          dispatch(createTop(topData));
          break;
        }
      }
    }
  };
  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="dino-button" onClick={increment}>
        {score}
      </button>
      <button className="dino-button" onClick={checkIfTop}>
        CHECK
      </button>
    </motion.section>
  );
};

export default Dino;

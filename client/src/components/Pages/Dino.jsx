import React, { useState, createContext } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";

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
    let nameExists = false;
    if (tops.length !== 0)
      for (var i = 0; i < tops.length; i++) {
        if (topData.player === tops[i].player) nameExists = true;
        if (topData.maxScore > tops[i].maxScore) {
          if (topData.player === tops[i].player) {
            dispatch(updateTop(tops[i]._id, topData));
            return;
          }
          dispatch(createTop(topData));
          return;
        }
      }
    if (tops.length < 3 && !nameExists) dispatch(createTop(topData));
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

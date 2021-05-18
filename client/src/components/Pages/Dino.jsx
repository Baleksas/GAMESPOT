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
    // FIXME-Make update functionallity - according to player, update the score to avoid creating more tops (possible to do without updating, by creating+deleting)
    if (tops.length !== 0)
      for (var i = 0; i < tops.length; i++) {
        console.log("in i");
        if (topData.maxScore > tops[i].maxScore) {
          console.log("in if");
          for (var j = 0; j < tops.length; j++) {
            console.log("in j");
            if (topData.player === tops[j].player) {
              console.log(tops[j]._id);
              dispatch(updateTop(tops[j]._id, topData));
              return;
            }
          }
        }
      }
    if (tops.length < 3) dispatch(createTop(topData));
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

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Loading from "../Elements/Loading";
import TopItem from "../Elements/TopItem";
import { getTops } from "../../actions/tops";
import { useDispatch } from "react-redux";

const Top = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);
  const tops = useSelector((state) => state.tops);

  // SORTING AND GIVING PLACES
  for (var i = 0; i < tops.length; i++) {
    for (var j = 0; j < tops.length; j++) {
      if (tops[i].maxScore > tops[j].maxScore) {
        [tops[i], tops[j]] = [tops[j], tops[i]];
      }
    }
  }
  tops.forEach((top, index) => {
    top.place = index + 1;
  });
  // FIXME- Delete all tops after third with for loop (for i=3...) and leave just three tops.
  // To have several games, filter and sorting efficient alghorithms will be needed
  const showTops = tops.slice(0, 3);
  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top">
        {!tops.length ? (
          <Loading />
        ) : (
          showTops.map((top) => <TopItem key={top._id} top={top} />)
        )}
      </div>
    </motion.section>
  );
};

export default Top;

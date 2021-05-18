import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Loading from "../Elements/Loading";
import TopItem from "../Elements/TopItem";
import { getTops, deleteTop } from "../../actions/tops";
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
  // FILTERS tops which will be shown and kept on a board
  const showDinoTops = tops.filter((top) => top.game === "dino").slice(0, 3);
  // FILTERS tops which have to be deleted as they are not used or shown. It means that if you want to lock your progress, you have to make a record score.
  const deleteDinoTops = tops.filter((top) => top.game === "dino").slice(3);
  // Maps through unshown tops and deletes them from the database
  deleteDinoTops.map((topToDelete) => dispatch(deleteTop(topToDelete._id)));
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
          showDinoTops.map((top) => <TopItem key={top._id} top={top} />)
        )}
      </div>
    </motion.section>
  );
};

export default Top;

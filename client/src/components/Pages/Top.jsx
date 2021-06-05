import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Loading from "../Elements/Loading";
import TopItem from "../Elements/TopItem";
import { getTops, deleteTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import Dino from "../../img/Dino.jpg";
import Movies from "../../img/Movies.gif";

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
  const sort = (array) => {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[i].maxScore > array[j].maxScore) {
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    }
  };
  // FILTERS tops which will be shown and kept on a board
  const showDinoTops = tops.filter((top) => top.game === "dino").slice(0, 3);
  showDinoTops.forEach((top, index) => {
    top.place = index + 1;
  });
  sort(showDinoTops);
  const showMsTops = tops.filter((top) => top.game === "movies").slice(0, 3);
  showMsTops.forEach((top, index) => {
    top.place = index + 1;
  });
  sort(showMsTops);

  // FILTERS tops which have to be deleted as they are not used or shown. It means that if you want to lock your progress, you have to make a record score.
  const deleteDinoTops = tops.filter((top) => top.game === "dino").slice(3);
  const deleteMsTops = tops.filter((top) => top.game === "movies").slice(3);

  // Maps through unshown tops and deletes them from the database
  deleteDinoTops.map((topToDelete) => dispatch(deleteTop(topToDelete._id)));
  deleteMsTops.map((topToDelete) => dispatch(deleteTop(topToDelete._id)));

  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top">
        <div id="dino-img" className="tops-icon">
          <img src={Dino} alt="Dino" />
        </div>
        {!showDinoTops.length ? (
          <div className="loading-container-dino">
            <Loading />
          </div>
        ) : (
          showDinoTops.map((top) => <TopItem key={top._id} top={top} />)
        )}
        <div id="ms-img" className="tops-icon">
          <img src={Movies} alt="movies" />
        </div>
        {!showMsTops.length ? (
          <div className="loading-container-ms">
            <Loading />
          </div>
        ) : (
          showMsTops.map((top) => <TopItem key={top._id} top={top} />)
        )}
      </div>
    </motion.section>
  );
};

export default Top;

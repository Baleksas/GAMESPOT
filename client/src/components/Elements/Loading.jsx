import React, { useState } from "react";
import LoadingGif from "../../img/Loading.gif";
const Loading = () => {
  const [notFound, setNotFound] = useState(false);
  setTimeout(() => {
    setNotFound(true);
  }, 5000);

  return !notFound ? (
    <div className="loading">
      <img src={LoadingGif} alt="" />
    </div>
  ) : (
    <span>Not found</span>
  );
};

export default Loading;

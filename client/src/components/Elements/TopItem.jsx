import React from "react";

const TopItem = ({ top }) => {
  return (
    <div className={`top-item top-${top.place}`}>
      <span>TOP#{`${top.place}`}</span>
      <span>{top.player}</span>
      <span>{top.maxScore}</span>
    </div>
  );
};

export default TopItem;

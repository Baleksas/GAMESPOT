import React from "react";
import Life from "../../img/Life.png";

const LifesBox = ({ lifes }) => {
  return (
    <div className={`lifes-div lifes-${lifes.length}`}>
      {lifes.map((life) => (
        <img key={life} src={Life} alt="" />
      ))}
    </div>
  );
};

export default LifesBox;

import React from "react";

const AlertBox = ({ type, error, show }) => {
  return (
    <div className={`alert-box ${type} ${show ? "show-alert" : ""}`}>
      {error}
    </div>
  );
};

export default AlertBox;

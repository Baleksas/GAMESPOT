import React from "react";

const Faq = () => {
  return (
    <>
      <div id="FAQ" className="FAQ">
        <h2>FAQ</h2>
        <ul>
          <li>WHY</li>
          <li>WHO</li>
          <li>HOW</li>
          <li>WHEN</li>
        </ul>
      </div>
      <button
        onClick={() => document.getElementById("FAQ").classList.toggle("show")}
        className="FAQ-link"
      >
        ?
      </button>
    </>
  );
};

export default Faq;

import React from "react";
import Github from "../img/Github.png";
import LinkedIn from "../img/li.png";

const Faq = () => {
  return (
    <>
      <div id="FAQ" className="FAQ">
        <div className="extra_info">
          <p>This full-stack application contains profanity filter</p>
        </div>
        <h2>FAQ</h2>
        <ul>
          <li className="faq-li">
            <h5> WHY</h5>
            <span>4 fun</span>
          </li>
          <li className="faq-li">
            <h5> WHO</h5>
            <span>Aleksas Bagdonas</span>
          </li>
          <li className="faq-li">
            <h5> HOW</h5>
            <span>MERN stack</span>
          </li>
          <li className="faq-li">
            <h5> WHEN</h5>
            <span>20/21</span>
          </li>
          <li className="faq-li links">
            <a target="_blank" href="https://github.com/Baleksas">
              <img src={Github} alt="Github" />
            </a>
            <a
              target="_blank"
              href="https://uk.linkedin.com/in/aleksas-bagdonas-2bb8a71b2"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
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

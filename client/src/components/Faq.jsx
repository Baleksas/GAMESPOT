import React from "react";
import { motion } from "framer-motion";
import Github from "../img/Github.png";
import LinkedIn from "../img/li.png";
import Skull from "../img/Skull.png";

import Music from "../img/Sound.mp3";

const Faq = () => {
  return (
    <>
      {/* <audio id="music" className="audio" loop autoPlay controls>
        <source src={Music} />
      </audio> */}
      <div id="FAQ" className="FAQ">
        <h2>FAQ</h2>
        <ul>
          <li className="faq-li">
            <h5> WHY</h5>
            <span>4 fun</span>
          </li>
          <li className="faq-li">
            <h5> WHO</h5>
            <span>alex</span>
          </li>
          <li className="faq-li">
            <h5> HOW</h5>
            <span>mern stack</span>
          </li>
          <li className="faq-li">
            <h5> WHEN</h5>
            <span>2021/may</span>
          </li>
          <li className="faq-li links">
            <a target="_blank" href="https://github.com/MrForIf">
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
      {/* <button
        onClick={() => {
          if (document.getElementById("music").paused)
            document.getElementById("music").play();
          else document.getElementById("music").pause();
        }}
        className="play"
      >
        Music
      </button> */}
    </>
  );
};

export default Faq;

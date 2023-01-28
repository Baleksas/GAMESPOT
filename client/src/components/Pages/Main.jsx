import React, { useState } from "react";
import { motion } from "framer-motion";
import Text from "../Text/Text.json";
import Typing from "react-typing-animation";
import { CensorSensor } from "censor-sensor";
import Faq from "../../components/Faq";
import AlertBox from "../Elements/AlertBox";
import { Link } from "react-router-dom";
import alienchoose from "../../img/alienchoose.png";
const Main = ({ name, setName, hideMain, setHideMain }) => {
  const [termName, setTermName] = useState();
  const [inputError, setInputError] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const censor = new CensorSensor();
  const checkIfAppropriate = (termName) => {
    if (termName === "" || termName === undefined) {
      setInputError("Too short!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return true;
    }
    if (censor.isProfane(termName)) {
      setInputError("Bad word!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return true;
    }
  };
  const confirmName = (e) => {
    e.preventDefault();
    if (checkIfAppropriate(termName)) {
      setTermName("");
      return;
    }

    setName(termName);
    setHideMain(true);
  };
  const main_backscreen = () => {
    let random = Math.floor(Math.random() * 100);
    setName(`ALIEN_${random}`);
    setHideMain(true);
    setTermName("");
  };
  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {hideMain === false ? (
        <div id="choose" className="main-choose">
          <form className="name-form" onSubmit={confirmName}>
            <label htmlFor="nick">Choose your name</label>
            <input
              id="nick"
              name="nick"
              type="text"
              value={termName}
              onChange={(e) => setTermName(e.target.value)}
            />
            <AlertBox type="name-alert" error={inputError} show={showAlert} />
            <input type="submit" value="DONE" />
          </form>
          <button onClick={main_backscreen} className="no-name-btn">
            I WILL BE AN ALIEN INSTEAD
          </button>
        </div>
      ) : (
        <div className="phrase">
          <span>
            YOUR NAME IS: <span className="phrase-name">{name}</span>
          </span>
          <button onClick={() => setHideMain(false)} className="change-btn">
            CHANGE NAME
          </button>
          <div className="choosePath">
            <li className={`chooseItem`}>
              <Link to="/CSQuiz">CSQuiz {"<-"}</Link>
            </li>
            <li>
              <img width={50} src={alienchoose} alt="a" />
            </li>
            <li className={`chooseItem`}>
              <Link to="/movies">{"->"}Movies</Link>
            </li>
          </div>
          <Typing speed={10}>
            <p>
              {Text.phrases[Math.floor(Math.random() * Text.phrases.length)]}
            </p>
          </Typing>
        </div>
      )}
      <Faq />
    </motion.section>
  );
};

export default Main;

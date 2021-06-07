import React, { useState } from "react";
import { motion } from "framer-motion";
import Text from "../Text/Text.json";
import Typing from "react-typing-animation";
import { CensorSensor } from "censor-sensor";
import Faq from "../../components/Faq";
const Main = ({ name, setName, hideMain, setHideMain }) => {
  const [termName, setTermName] = useState();
  const censor = new CensorSensor();

  const confirmName = (e) => {
    e.preventDefault();
    if (termName === "" || termName === undefined) {
      alert("INVALID");
      return;
    }
    if (censor.isProfane(termName)) {
      alert(`It's either bad word or bug. Sorry!`);
      setTermName("");
      return;
    }
    setName(termName);
    setHideMain(true);
  };
  const main_backscreen = () => {
    let random = Math.floor(Math.random() * 1000);
    setName(`ALIEN_${random}`);
    setHideMain(true);
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
          <form onSubmit={confirmName}>
            <label htmlFor="nick">Choose your name</label>
            <input
              id="nick"
              name="nick"
              type="text"
              value={termName}
              onChange={(e) => setTermName(e.target.value)}
            />
            <input type="submit" value="DONE" />
          </form>
          <button onClick={main_backscreen} className="no-name-btn">
            I WILL BE ALIEN INSTEAD
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

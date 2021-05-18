import React, { useState } from "react";
import { motion } from "framer-motion";
import Text from "../Text/Text.json";
const Main = ({ setName }) => {
  // console.log(Math.floor(Math.random() * Text.phrases.length));
  const [termName, setTermName] = useState("");
  const [hideMain, setHideMain] = useState(false);
  const confirmName = (e) => {
    e.preventDefault();
    setName(termName);
    setHideMain(true);
  };
  const main_backscreen = () => {
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
              onChange={(e) => setTermName(e.target.value)}
            />
            <input type="submit" value="DONE" />
            {/*FIXME- Functionality for button */}
          </form>
          <button onClick={main_backscreen} className="no-name-btn">
            I WILL BE ALIEN INSTEAD
          </button>
        </div>
      ) : (
        <div className="phrase">
          {Text.phrases[Math.floor(Math.random() * Text.phrases.length)]}
        </div>
      )}
    </motion.section>
  );
};

export default Main;

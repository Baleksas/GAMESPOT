import React, { useState } from "react";
import { motion } from "framer-motion";

const Main = ({ setName }) => {
  const [termName, setTermName] = useState("");
  const confirmName = (e) => {
    e.preventDefault();
    setName(termName);
    console.log("CONFIRMED");
  };
  return (
    <motion.section
      id="main"
      initial={{ scaleY: 1, scaleX: 1 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0 }}
    >
      <div className="main-choose">
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
          <button>THANKS, NO</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Main;

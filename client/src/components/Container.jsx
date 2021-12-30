import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../components/Pages/Main";
import CSQuiz from "../components/Pages/CSQuiz";
import Movies from "./Pages/Movies";
import Top from "../components/Pages/Top";
import Reviews from "../components/Pages/Reviews";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Container = ({
  hideMain,
  setHideMain,
  readRules,
  setReadRules,
  name,
  setName,
}) => {
  const location = useLocation();
  const [lifes, setLifes] = useState([0, 1, 2]);

  return (
    <>
      <div className="container">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Main
                hideMain={hideMain}
                setHideMain={setHideMain}
                name={name}
                setName={setName}
              />
            </Route>
            <Route path="/CSQuiz">
              <CSQuiz
                readRules={readRules}
                setReadRules={setReadRules}
                name={name}
                lifes={lifes}
                setLifes={setLifes}
              />
            </Route>
            <Route path="/top">
              <Top />
            </Route>
            <Route path="/movies">
              <Movies
                readRules={readRules}
                setReadRules={setReadRules}
                name={name}
                lifes={lifes}
                setLifes={setLifes}
              />
            </Route>
            <Route path="/reviews">
              <Reviews name={name} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Container;

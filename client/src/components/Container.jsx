import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../components/Pages/Main";
import Dino from "../components/Pages/Dino";
import Movies from "./Pages/Movies";
import Top from "../components/Pages/Top";
import Reviews from "../components/Pages/Reviews";
import Faq from "../components/Faq";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Container = ({ readRules, setReadRules, name, setName }) => {
  const location = useLocation();

  return (
    <>
      <div className="container">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Main name={name} setName={setName} />
            </Route>
            <Route path="/dino">
              <Dino
                readRules={readRules}
                setReadRules={setReadRules}
                name={name}
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
              />
            </Route>
            <Route path="/reviews">
              <Reviews name={name} />
            </Route>
          </Switch>
        </AnimatePresence>
        <Faq />
      </div>
    </>
  );
};

export default Container;

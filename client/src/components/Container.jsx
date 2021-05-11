import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../components/Pages/Main";
import Dino from "../components/Pages/Dino";
import Msweeper from "../components/Pages/Msweeper";
import Top from "../components/Pages/Top";
import Reviews from "../components/Pages/Reviews";
import Faq from "../components/Faq";

const Container = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/dino">
          <Dino />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/m-sweeper">
          <Msweeper />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
      </Switch>
      <Faq />
    </div>
  );
};

export default Container;

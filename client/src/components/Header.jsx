import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li className={`navItem`}>
            <Link to="/dino">...</Link>
          </li>
          <li className={`navItem`}>
            <Link to="/movies">Movies</Link>
          </li>
          <li id="title">
            <Link to="/">GAMESPOT</Link>
          </li>
          <li className={`navItem`}>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className={`navItem`}>
            <Link to="/top">Top</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

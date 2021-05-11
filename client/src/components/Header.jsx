import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li
            className={`navItem ${
              window.location.pathname === "/dino" ? "underlined" : ""
            }`}
          >
            <Link to="/dino">Dino</Link>
          </li>
          <li
            className={`navItem ${
              window.location.pathname === "/m-sweeper" ? "underlined" : ""
            }`}
          >
            <Link to="/m-sweeper">M-Sweeper</Link>
          </li>
          <li id="title">
            <Link to="/">GAMESPOT</Link>
          </li>
          <li
            className={`navItem ${
              window.location.pathname === "/reviews" ? "underlined" : ""
            }`}
          >
            <Link to="/reviews">Reviews</Link>
          </li>
          <li
            className={`navItem ${
              window.location.pathname === "/top" ? "underlined" : ""
            }`}
          >
            <Link to="/top">Top</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

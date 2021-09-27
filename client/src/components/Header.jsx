import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ufo_closed from "../img/Ufo_black.png";
import Ufo_open from "../img/Ufo_white.png";

const Header = ({ hideMain, setHideMain }) => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  return (
    <>
      <div className="burger">
        {/* <span id="title">GAMESPOT</span> */}
        <button onClick={() => setMobileIsOpen(!mobileIsOpen)}>
          <img src={mobileIsOpen ? Ufo_closed : Ufo_open} alt="" />
        </button>
      </div>
      <header id="header">
        <nav>
          <ul>
            <li onClick={() => setHideMain(true)} className={`navItem`}>
              <Link to="/CSQuiz">CSQuiz</Link>
            </li>
            <li onClick={() => setHideMain(true)} className={`navItem`}>
              <Link to="/movies">Movies</Link>
            </li>
            <li id="title">
              <Link to="/">GAMESPOT</Link>
            </li>
            <li onClick={() => setHideMain(true)} className={`navItem`}>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li onClick={() => setHideMain(true)} className={`navItem`}>
              <Link to="/top">Top</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className={`mobile-header ${mobileIsOpen ? "mobile-show" : ""}`}>
        <nav>
          <li className={`navItem gamespot-vertical`}>
            <Link onClick={() => setMobileIsOpen(!mobileIsOpen)} to="/">
              GAMESPOT
            </Link>
          </li>
          <ul>
            <li className={`navItem`}>
              <Link onClick={() => setMobileIsOpen(!mobileIsOpen)} to="/dino">
                Dino
              </Link>
            </li>
            <li className={`navItem`}>
              <Link onClick={() => setMobileIsOpen(!mobileIsOpen)} to="/movies">
                Movies
              </Link>
            </li>

            <li className={`navItem`}>
              <Link
                onClick={() => setMobileIsOpen(!mobileIsOpen)}
                to="/reviews"
              >
                Reviews
              </Link>
            </li>
            <li className={`navItem`}>
              <Link onClick={() => setMobileIsOpen(!mobileIsOpen)} to="/top">
                Top
              </Link>
            </li>
          </ul>
          <li className={`navItem gamespot-vertical`}>
            <Link onClick={() => setMobileIsOpen(!mobileIsOpen)} to="/">
              GAMESPOT
            </Link>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Header;

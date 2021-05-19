import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTops } from "../actions/tops";
import { useSelector } from "react-redux";

const Footer = ({ text }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);
  const tops = useSelector((state) => state.tops);
  let FooterMessage = "";
  switch (location.pathname) {
    case "/reviews":
      FooterMessage = "Thanks for the feedback!";
      break;
    case "/top":
      FooterMessage = tops.length
        ? `Go on! You can beat that ${tops[0].player}`
        : "There is not much competition, eh?";
      break;
    case "/dino":
      FooterMessage = "Don't worry, your internet is fine...";
      break;
    case "/m-sweeper":
      FooterMessage = "Pretend it's a real life soldier!";
      break;
    case "/":
      FooterMessage = "6#$%#$&451#$^6#5%&8789$#%$&";
      break;
  }
  return (
    <footer className="example1">
      <h3>{FooterMessage}</h3>
    </footer>
  );
};

export default Footer;

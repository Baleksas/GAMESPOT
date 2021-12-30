import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTops } from "../actions/tops";
import { useSelector } from "react-redux";
import Text from "../components/Text/Text.json";
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
    case "/CSQuiz":
      FooterMessage = [
        "Computer Science is not a joke",
        "Struggle is real!",
        "How is it going for you?",
      ][Math.round(Math.random())];
      break;
    case "/movies":
      FooterMessage =
        Text["footer-movies"][
          Math.floor(Math.random() * Text["footer-movies"].length)
        ];
      break;
    case "/":
      FooterMessage = "@$%^%$&*&@#$%^O&(*^%#@!&^%#$%";
      break;
  }
  return (
    <footer className="example1">
      <h3>{FooterMessage}</h3>
    </footer>
  );
};

export default Footer;

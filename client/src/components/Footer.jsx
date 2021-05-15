import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ text }) => {
  const location = useLocation();

  let FooterMessage = "";
  switch (location.pathname) {
    case "/reviews":
      FooterMessage = "Thanks for the feedback!";
      break;
    case "/top":
      FooterMessage = "You can do this pal!";
      break;
    case "/dino":
      FooterMessage = "Don't worry, your internet is fine...";
      break;
    case "/m-sweeper":
      FooterMessage = "Pretend it's a real life soldier!";
      break;
    case "/":
      FooterMessage =
        "⍙⟒⌰☊⍜⋔⟒ ⊑⎍⋔⏃⋏ ⊬⍜⎍ ⏃⍀⟒ ☌⍀⟒⟒⏁⟒⎅ ⏚⊬ ⍜⎍⍀ ⌇⌿⟒☊⏁⏃☊⎍⌰⏃⍀ ☊⍀⟒⏃⏁⟟⍜⋏";
      break;
  }
  return (
    <footer className="example1">
      <h3>{FooterMessage}</h3>
    </footer>
  );
};

export default Footer;

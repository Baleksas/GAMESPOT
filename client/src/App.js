import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Container />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;

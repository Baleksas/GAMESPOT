import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      {window.location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;

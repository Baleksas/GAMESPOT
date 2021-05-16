import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  let random = Math.floor(Math.random() * 1000);
  const [name, setName] = useState(`ALIEN_${random}`);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="App">
      <Header />
      <Container name={name} setName={setName} />
      <Footer />
    </div>
  );
}

export default App;

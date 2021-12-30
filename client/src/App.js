import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  let random = Math.floor(Math.random() * 100);
  const [name, setName] = useState(`ALIEN_${random}`);
  const [readRules, setReadRules] = useState([]);
  const [hideMain, setHideMain] = useState(false);
  useEffect(() => {}, [readRules]);
  return (
    <div className="App">
      <Header hideMain={hideMain} setHideMain={setHideMain} />
      <Container
        hideMain={hideMain}
        setHideMain={setHideMain}
        readRules={readRules}
        setReadRules={setReadRules}
        name={name}
        setName={setName}
      />
      <Footer />
    </div>
  );
}

export default App;

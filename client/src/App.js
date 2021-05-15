import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getReviews } from "./actions/reviews";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

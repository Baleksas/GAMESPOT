import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Movie from "../Elements/Movie";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const Msweeper = () => {
  const [movies, setMovies] = useState([]);
  const [guess, setGuess] = useState(0);
  const [randomMovie, setRandomMovie] = useState();

  useEffect(async () => {
    console.log(process.env);
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setRandomMovie(data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);
  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ms-game">
        <Movie randomMovie={randomMovie} />
      </div>
    </motion.section>
  );
};

export default Msweeper;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Movie from "../Elements/Movie";
import AlienCorrect from "../../img/AlienIconCorrect.png";
import AlienIncorrect from "../../img/AlienIconIncorrect.png";
import AlienIcon from "../../img/AlienIcon.png";
import Life from "../../img/Life.png";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const Msweeper = ({ name }) => {
  console.log("name in m-sweeper: ", name);
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [movies, setMovies] = useState([]);
  const [guess, setGuess] = useState(0);
  const [randomMovie, setRandomMovie] = useState();
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [lifes, setLifes] = useState([0, 1, 2]);
  const [answerWas, setAnswerWas] = useState();
  const [correctAnswerWas, setCorrectAnswerWas] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "m-sweeper",
  });
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .catch((e) => console.log(e))
      .then((data) => {
        setMovies(data.results);
        setRandomMovie(data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);

  const checkIfTop = () => {
    let nameExists = false;
    if (tops.length !== 0)
      for (var i = 0; i < tops.length; i++) {
        if (topData.player === tops[i].player) nameExists = true;
        if (topData.maxScore > tops[i].maxScore) {
          if (topData.player === tops[i].player) {
            dispatch(updateTop(tops[i]._id, topData));
            return;
          }
          dispatch(createTop(topData));
          return;
        }
      }
    if (tops.length < 3 && !nameExists) dispatch(createTop(topData));
  };
  const compareGuess = () => {
    if (Math.abs(randomMovie.vote_average - guess) < 1) {
      // FIXME-Score is not changing properly, rendering problems
      console.log("...", score);
      setScore(score + 1);
      console.log("...", score);

      setTopData({ ...topData, maxScore: score });
      setIsCorrect(true);
      checkIfTop();
    } else {
      setIsCorrect(false);
      lifes.pop();
      setLifes(lifes);
    }
    if (lifes.length === 0) {
      setGameOver(true);
    }
    setAnswerWas(guess);
    setCorrectAnswerWas(randomMovie.vote_average);
    setRandomMovie(movies[Math.floor(Math.random() * 20)]);
  };
  const playAgain = () => {
    setGameOver(false);
    setLifes([0, 1, 2]);
    setScore(0);
  };

  return (
    <motion.section
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!gameOver ? (
        <div className="ms-game">
          <Movie
            randomMovie={randomMovie}
            compareGuess={compareGuess}
            setGuess={setGuess}
            guess={guess}
          />
          <div className="movie-display">
            <div>
              {lifes.map((life) => (
                <img key={life} src={Life} alt="" />
              ))}
            </div>
            <div>Score: {score}</div>
            <div className="indicator">
              {isCorrect ? (
                <img src={AlienCorrect} alt="YES" />
              ) : (
                <img src={AlienIncorrect} alt="NO" />
              )}
            </div>
            <div>Your guess was: {answerWas}</div>
            <div>Correct answer: {correctAnswerWas}</div>
          </div>
        </div>
      ) : (
        <div>
          <span>GAME OVER</span>
          <span>Your score: {score}</span>
          <button onClick={() => playAgain()}>PLAY AGAIN</button>
        </div>
      )}
    </motion.section>
  );
};

export default Msweeper;

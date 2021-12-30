import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Movie from "../Elements/Movie";
import AlienCorrect from "../../img/AlienIconCorrect.png";
import AlienIncorrect from "../../img/AlienIconIncorrect.png";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import Rules from "./Rules";
import { Link } from "react-router-dom";
import LifesBox from "../Elements/LifesBox";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const Movies = ({ name, readRules, setReadRules, lifes, setLifes }) => {
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [movies, setMovies] = useState([]);
  const [guess, setGuess] = useState(0);
  const [randomMovie, setRandomMovie] = useState();
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [answerWas, setAnswerWas] = useState();
  const [gotToTopBoard, setGotToTopBoard] = useState(false);
  const [correctAnswerWas, setCorrectAnswerWas] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "movies",
  });

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .catch((e) => console.log(e))
      .then((data) => {
        setMovies(data.results);
        setRandomMovie(data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);
  useEffect(() => {
    setTopData({ ...topData, maxScore: score });
  }, [score]);

  const checkIfTop = (lastCheck) => {
    console.log(lastCheck);
    let movie_tops = tops.filter((top) => top.game === "movies");
    let playerExists = false;
    for (var i = 0; i < tops.length; i++) {
      if (topData.player === tops[i].player) playerExists = true;
    }

    for (var i = 0; i < tops.length; i++) {
      if (
        topData.maxScore > tops[i].maxScore &&
        topData.game === tops[i].game
      ) {
        if (topData.player === tops[i].player) {
          dispatch(updateTop(tops[i]._id, topData));
          setGotToTopBoard(true);
          return;
        } else if (!playerExists) {
          console.log("Creating because no same player");
          dispatch(createTop(topData));
          setGotToTopBoard(true);
          return;
        }
      }
    }
    if (movie_tops.length < 3 && !playerExists && lastCheck !== true) {
      console.log("Creating because not true");
      dispatch(createTop(topData));
      setGotToTopBoard(true);
      return;
    }
  };
  const compareGuess = () => {
    let acurracyOfGuess = Math.abs(randomMovie.vote_average - guess);
    if (Math.abs(acurracyOfGuess) <= 1) {
      if (Math.abs(acurracyOfGuess) === 0) {
        setScore(score + 10);
      } else if (Math.abs(acurracyOfGuess) <= 0.2) {
        setScore(score + 3);
      } else if (Math.abs(acurracyOfGuess) <= 0.5) {
        setScore(score + 2);
      } else setScore(score + 1);

      setIsCorrect(true);
      checkIfTop();
    } else {
      setIsCorrect(false);
      lifes.pop();
      setLifes(lifes);
    }
    if (lifes.length === 0) {
      checkIfTop(true);
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
  const openRules = () => {
    setReadRules(readRules.filter((game) => game !== "movies"));
  };

  if (!readRules.includes("movies"))
    return (
      <motion.section
        initial={{ scaleY: 0, scaleX: 0 }}
        animate={{ scaleY: 1, scaleX: 1 }}
        exit={{ scaleY: 0, scaleX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Rules
          setReadRules={setReadRules}
          readRules={readRules}
          game="movies"
        />
      </motion.section>
    );
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
            <LifesBox lifes={lifes} />
            <div>Score: {score}</div>
            <div className="indicator">
              {isCorrect ? (
                <img src={AlienCorrect} alt="YES" />
              ) : (
                <img src={AlienIncorrect} alt="NO" />
              )}
            </div>
            {answerWas && (
              <div>
                Your guess was:<br></br> {answerWas}
              </div>
            )}
            {correctAnswerWas && (
              <div>
                Correct answer:<br></br> {correctAnswerWas}
              </div>
            )}
            <button onClick={openRules} className="open-rules">
              RULES
            </button>
          </div>
        </div>
      ) : (
        <div className="game-over-div">
          <span>GAME OVER</span>
          <span>Your score: {score}</span>
          <button className="play-again-btn" onClick={() => playAgain()}>
            PLAY AGAIN
          </button>
          {gotToTopBoard && (
            <>
              <span style={{ textAlign: "center" }}>
                Congratulations! You got to the TOP board
              </span>
              <Link className="play-again-btn" to="/top">
                TOP
              </Link>
            </>
          )}
        </div>
      )}
    </motion.section>
  );
};

export default Movies;

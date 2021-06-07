import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import Life from "../../img/Life.png";
import Rules from "./Rules";
import AlienCorrect from "../../img/AlienIconCorrect.png";
import AlienIncorrect from "../../img/AlienIconIncorrect.png";
const FEATURED_API = ``;

const Dino = ({ name, readRules, setReadRules }) => {
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [data, setData] = useState();
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [answerWas, setAnswerWas] = useState();
  const [correctAnswerWas, setCorrectAnswerWas] = useState();
  const [lifes, setLifes] = useState([0, 1, 2]);
  const [gameOver, setGameOver] = useState(false);
  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "dino",
  });

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .catch((e) => console.log(e))
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const playAgain = () => {
    setGameOver(false);
    setLifes([0, 1, 2]);
    setScore(0);
  };
  const openRules = () => {
    setReadRules(readRules.filter((game) => game !== "dino"));
  };

  const compareGuess = () => {
    // if (Math.abs(randomMovie.vote_average - guess) < 1) {
    //   setScore(score + 1);
    //   setIsCorrect(true);
    //   checkIfTop();
    // } else {
    //   setIsCorrect(false);
    //   lifes.pop();
    //   setLifes(lifes);
    // }
    // if (lifes.length === 0) {
    //   checkIfTop();
    //   setGameOver(true);
    // }
    // setAnswerWas(guess);
    // setCorrectAnswerWas(randomMovie.vote_average);
    // setRandomMovie(movies[Math.floor(Math.random() * 20)]);
  };
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
  if (!readRules.includes("dino"))
    return (
      <motion.section
        initial={{ scaleY: 0, scaleX: 0 }}
        animate={{ scaleY: 1, scaleX: 1 }}
        exit={{ scaleY: 0, scaleX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Rules setReadRules={setReadRules} readRules={readRules} game="dino" />
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
          {/* <Movie
            randomMovie={randomMovie}
            compareGuess={compareGuess}
            setGuess={setGuess}
            guess={guess}
          /> */}
          <div className="lifes-div">
            {lifes.map((life) => (
              <img key={life} src={Life} alt="" />
            ))}
          </div>
          <div className="movie-display">
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
        </div>
      )}
    </motion.section>
  );
};

export default Dino;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import Rules from "./Rules";
import AlienCorrect from "../../img/AlienIconCorrect.png";
import AlienIncorrect from "../../img/AlienIconIncorrect.png";
import AlienNeutral from "../../img/AlienIcon.png";

import GameOne from "../Elements/GameOne";
import { Link } from "react-router-dom";
import LifesBox from "../Elements/LifesBox";
const FEATURED_API = `https://opentdb.com/api.php?amount=50&category=18&type=multiple`;

const CSQuiz = ({ name, readRules, setReadRules, lifes, setLifes }) => {
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [data, setData] = useState();
  const [score, setScore] = useState(0);
  const [randomQuestion, setRandomQuestion] = useState();

  const [isCorrect, setIsCorrect] = useState();
  const [answerWas, setAnswerWas] = useState();
  const [gotToTopBoard, setGotToTopBoard] = useState(false);

  const [correctAnswerWas, setCorrectAnswerWas] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "CSQuiz",
  });

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .catch((e) => console.log(e))
      .then((data) => {
        setData(data);
        setRandomQuestion(data.results[Math.floor(Math.random() * 50)]);
      });
  }, []);
  useEffect(() => {
    setTopData({ ...topData, maxScore: score });
  }, [score]);
  const playAgain = () => {
    setGameOver(false);
    setLifes([0, 1, 2]);
    setScore(0);
  };
  const openRules = () => {
    setReadRules(readRules.filter((game) => game !== "CSQuiz"));
  };
  const compareGuess = (choice, index) => {
    if (choice) {
      setScore(score + 1);
      setIsCorrect(true);
      checkIfTop();
    } else {
      setIsCorrect(false);
      lifes.pop();
      setLifes(lifes);
    }
    if (lifes.length === 0) {
      checkIfTop();
      setGameOver(true);
    }
    setAnswerWas(randomQuestion.incorrect_answers[index]);
    setCorrectAnswerWas(randomQuestion.correct_answer);
    setRandomQuestion(data.results[Math.floor(Math.random() * 50)]);
  };
  const checkIfTop = () => {
    let quiz_tops = tops.filter((top) => top.game === "CSQuiz");

    if (quiz_tops.length === 0) {
      dispatch(createTop(topData));
      setGotToTopBoard(true);
      return;
    } else {
      for (var i = 0; i < quiz_tops.length; i++) {
        if (
          topData.maxScore > quiz_tops[i].maxScore &&
          topData.game === quiz_tops[i].game
        ) {
          if (topData.player === quiz_tops[i].player) {
            dispatch(updateTop(quiz_tops[i]._id, topData));
            setGotToTopBoard(true);
            return;
          } else {
            dispatch(createTop(topData));
            setGotToTopBoard(true);
            return;
          }
        }
      }
    }
  };

  if (!readRules.includes("CSQuiz"))
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
          game="CSQuiz"
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
        <div className="CSQuiz-game">
          <GameOne
            randomQuestion={randomQuestion}
            compareGuess={compareGuess}
          />

          <div className="movie-display">
            <LifesBox lifes={lifes} />

            <div>Score: {score}</div>
            <div className="indicator">
              {typeof isCorrect === "undefined" && (
                <img src={AlienNeutral} alt="Neutral" />
              )}
              {isCorrect === true && <img src={AlienCorrect} alt="YES" />}
              {isCorrect === false && <img src={AlienIncorrect} alt="No" />}
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

export default CSQuiz;

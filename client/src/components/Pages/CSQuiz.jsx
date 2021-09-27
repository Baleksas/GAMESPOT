import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createTop, updateTop } from "../../actions/tops";
import { useDispatch } from "react-redux";
import Life from "../../img/Life.png";
import Rules from "./Rules";
import AlienCorrect from "../../img/AlienIconCorrect.png";
import AlienIncorrect from "../../img/AlienIconIncorrect.png";
import GameOne from "../Elements/GameOne";
const FEATURED_API = `https://opentdb.com/api.php?amount=50&category=18&type=multiple`;

const CSQuiz = ({ name, readRules, setReadRules }) => {
  const dispatch = useDispatch();
  const tops = useSelector((state) => state.tops);
  const [data, setData] = useState();
  const [score, setScore] = useState(0);
  const [randomQuestion, setRandomQuestion] = useState();

  const [isCorrect, setIsCorrect] = useState();
  const [answerWas, setAnswerWas] = useState();
  const [correctAnswerWas, setCorrectAnswerWas] = useState();
  const [lifes, setLifes] = useState([0, 1, 2]);
  const [gameOver, setGameOver] = useState(false);
  const [topData, setTopData] = useState({
    player: name,
    maxScore: score,
    game: "CSQuiz",
  });

  useEffect(async () => {
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
      console.log("CORRECT");
      setScore(score + 1);
      setIsCorrect(true);
      checkIfTop();
    } else {
      console.log("NOT CORRECT");
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
    let nameExists = false;
    console.log("tops length:", tops.length);
    if (tops.length !== 0)
      for (var i = 0; i < tops.length; i++) {
        if (
          topData.player === tops[i].player &&
          topData.game === tops[i].game
        ) {
          nameExists = true;
          console.log("name exists:", tops[i].player);
        }
        if (topData.maxScore > tops[i].maxScore) {
          if (topData.player === tops[i].player) {
            dispatch(updateTop(tops[i]._id, topData));
            console.log("NAME IS SAME. UPDATED. ", topData.player);
            return;
          }
          dispatch(createTop(topData));
          console.log("New top of csquiz created:", topData);
          return;
        }
      }
    if (tops.length < 3 && !nameExists && topData.maxScore !== 0) {
      dispatch(createTop(topData));
      console.log("New top of csquiz created:", topData);
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

export default CSQuiz;

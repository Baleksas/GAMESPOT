import React, { useState, useEffect } from "react";
import Loading from "../Elements/Loading";

const IMG_API = "https://image.tmdb.org/t/p/w300";

const Movie = ({ randomMovie, setGuess, guess, compareGuess }) => {
  console.log(randomMovie);
  const [inputGuess, setInputGuess] = useState(0);
  const makeGuess = () => {
    compareGuess();
    setGuess(0);
  };
  return (
    <>
      {randomMovie ? (
        <>
          <div className="poster">
            <img src={IMG_API + randomMovie.poster_path} alt="" />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{randomMovie.title}</h1>
            <p className="movie-overview">{randomMovie.overview}</p>
            <span className="movie-date">
              Release date: {randomMovie.release_date}
            </span>
            <div className="guess">
              <input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                name="imdb"
                type="number"
                autoFocus
                min="1"
                max="10"
              />
              <button className="guess-btn" onClick={() => makeGuess()}>
                GUESS
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Movie;

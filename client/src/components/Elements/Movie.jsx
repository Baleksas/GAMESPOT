import React from "react";
import Loading from "../Elements/Loading";
const IMG_API = "https://image.tmdb.org/t/p/w400";

const Movie = ({ randomMovie }) => {
  return (
    <>
      <div className="poster">
        {randomMovie ? (
          <img src={IMG_API + randomMovie.poster_path} alt="" />
        ) : (
          <Loading />
        )}
      </div>
      <div className="movie-info">
        <h1 className="movie-title">
          {randomMovie ? randomMovie.title : <Loading />}
        </h1>
        <p className="movie-overview">
          {randomMovie ? randomMovie.overview : <Loading />}
        </p>
        <span className="movie-date">
          {randomMovie ? randomMovie.release_date : <Loading />}
        </span>
        <div className="guess">
          <input name="imdb" type="number" />
          <button>GUESS</button>
        </div>
      </div>
    </>
  );
};

export default Movie;

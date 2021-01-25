import React from "react";
import SingleMovieStyles from "../styles/SingleMovieStyles";

const MovieItem = ({ movie }) => {
  const rating = Math.round(movie.vote_average / 2);
  const maxLength = 700;
  return (
    <SingleMovieStyles>
      <div className="card">
        <div className="card__inner">
          <div className="card__side--front">
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            />
          </div>
          <div className="card__side--back">
            <h2 className="card__title">{`${
              movie.title
            } (${movie.release_date.substring(0, 4)})`}</h2>
            <p
              className={`${
                movie.overview.length < maxLength
                  ? "card__description"
                  : "overflow"
              }`}
            >
              {movie.overview}
            </p>
            <p className="card__rating" title={`${rating} out of 5 stars`}>
              {`⭐️`.repeat(rating)}
              <span style={{ filter: `grayscale(100%)` }}>
                {`⭐️`.repeat(5 - rating)}
              </span>
              <span>({movie.vote_count})</span>
            </p>
          </div>
        </div>
      </div>
    </SingleMovieStyles>
  );
};

export default MovieItem;

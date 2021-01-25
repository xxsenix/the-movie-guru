import React from "react";
import styled from "styled-components";

const SingleMovieStyles = styled.div`
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 450px;
    object-fit: contain;
    display: grid;
    align-items: center;
  }
`;

const MovieItem = ({ movie }) => {
  return (
    <SingleMovieStyles>
      <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
      />
    </SingleMovieStyles>
  );
};

export default MovieItem;

import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const MovieGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const MovieList = ({ movies, error }) => {
  if (error) {
    return <h1>YOU FUCKED UP</h1>;
  }
  return (
    <MovieGridStyles>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </MovieGridStyles>
  );
};

export default MovieList;

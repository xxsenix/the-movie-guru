import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const MovieGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 10px;
`;

const MovieList = ({ movies }) => {
  return (
    <MovieGridStyles>
      {movies.map((movie) => {
        return <MovieItem movie={movie} />;
      })}
    </MovieGridStyles>
  );
};

export default MovieList;

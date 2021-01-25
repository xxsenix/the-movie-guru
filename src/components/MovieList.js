import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const MovieGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const MovieList = ({ movies, error, loading }) => {
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <LoadingPage />;
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

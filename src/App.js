import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import useMovies from "./hooks/useMovies";

const theme = {
  lightGreen: "#7ed56f",
  darkGreen: "#28b485;",
  white: "#ebebeb",
  lightGray: "#737373",
  gray: "#333",
};

const Layout = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
  padding-right: 10px;
  padding-left: 10px;
  border: 3px solid transparent;
  border-image: linear-gradient(to right, #7ed56f, #28b485);
  border-image-slice: 1;
`;

const App = () => {
  const [movies, search, error] = useMovies("Gladiator");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Typography />
      <Layout>
        <Header />
        <SearchBar onFormSubmit={search} />
        <MovieList error={error} movies={movies} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

import axios from "axios";
import { useState, useEffect } from "react";

const useMovies = (defaultSearchTerm) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    setError(false);
    setLoading(true);
    const baseURL = "https://api.themoviedb.org/3";
    const response = await axios.get(
      `${baseURL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${term}`
    );
    try {
      const movieId = response.data.results[0].id;

      const recommendations = await axios.get(
        `${baseURL}/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setLoading(false);
      setMovies(recommendations.data.results);
    } catch (err) {
      setError(true);
    }
  };

  return [movies, search, error, loading];
};

export default useMovies;

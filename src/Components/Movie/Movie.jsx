import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=ec087097ef1bc99294ce94cd7c9e97b1';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Page Movie</h1>
      <div>{movies.original_title}</div>
    </div>
  );
};

export default Movie;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieByGenre = (genres_id) => {
  const API_KEY = process.env.REACT_APP_APIKEY;
  const [genres, setGenres] = useState([]);
  const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres_id}`;

  useEffect(() => {
    axios
      .get(urlGenre)
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlGenre]);
  return genres;
};

export default useMovieByGenre;

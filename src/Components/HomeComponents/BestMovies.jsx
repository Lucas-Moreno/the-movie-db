import React from 'react';
import '../../css/bestMovies.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BestMovies = () => {
  const [bestMovies, setPersons] = useState([]);
  const API_KEY = process.env.REACT_APP_APIKEY;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => {
        const bestMoviesResults = res.data.results;
        setPersons(bestMoviesResults);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log('persons', bestMovies);

  return (
    <div className='bestmovies'>
      <img src='' alt='' />
      {bestMovies.map((bestMovie) => (
        <ul className='bestmovies--flex'>
          <li>{bestMovie.title}</li>
          <li>{bestMovie.release_date}</li>
        </ul>
      ))}
    </div>
  );
};

export default BestMovies;

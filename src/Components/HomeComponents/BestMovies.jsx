import React from 'react';
import '../../scss/bestMovies.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from './Slider';

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

  return (
    <div className='bestmovies'>
      <img src='' alt='' />
      <Slider bestMovies={bestMovies} />
    </div>
  );
};

export default BestMovies;

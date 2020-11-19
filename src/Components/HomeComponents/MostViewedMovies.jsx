import React from 'react';
import '../../scss/style.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from '../Sliders/SliderForMovies';

const BestMovies = () => {
  const [bestMovies, setPersons] = useState([]);

  const API_KEY = process.env.REACT_APP_APIKEY;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        const bestMoviesResults = res.data.results;
        console.log(bestMoviesResults);
        setPersons(bestMoviesResults);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <div className='bestmovies'>
      {/* <img src='' alt='' /> */}
      <Slider resultsOfRequest={bestMovies} />
    </div>
  );
};

export default BestMovies;

import React from 'react';
import BestMovies from './HomeComponents/BestMovies';
import MostViewedThreads from './HomeComponents/MostViewedThreads';

const Movie = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Les meilleurs films</p>
      <p>Tout voir</p>
      <BestMovies />
      <MostViewedThreads />
    </div>
  );
};

export default Movie;

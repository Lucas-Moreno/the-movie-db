import React from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';
import MostTrendedMovies from './HomeComponents/MostTrendedMovies';

const Movie = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Les meilleurs films</p>
      <p>Tout voir</p>
      <MostTrendedMovies />
      <MostViewedMovies />
      <MostViewedTvShows />
    </div>
  );
};

export default Movie;
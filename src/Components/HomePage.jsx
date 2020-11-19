import React from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';

const Movie = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Les meilleurs films</p>
      <p>Tout voir</p>
      <MostViewedMovies />
      <MostViewedTvShows />
    </div>
  );
};

export default Movie;

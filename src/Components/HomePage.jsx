import React from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';
import MostTrendedMovies from './HomeComponents/MostTrendedMovies';

import '../scss/style.scss';

const Movie = () => {
  return (
    <div className='home'>
      <h1>Home page</h1>
      <div className='home__mostTrendedMovies'>
        <span>
          <p className='home__mostTrendedMovies--title'>Les meilleurs films</p>
          <p className='home__mostTrendedMovies--viewAll'>Tout voir</p>
        </span>

        <MostTrendedMovies />
      </div>
      <div className='home__mostTrendedMovies'>
        <span>
          <p className='home__mostTrendedMovies--title'>Les films les mieux notés</p>
          <p className='home__mostTrendedMovies--viewAll'>Tout voir</p>
        </span>
        <MostViewedMovies />
      </div>
      <div className='home__mostTrendedMovies'>
        <span>
          <p className='home__mostTrendedMovies--title'>Séries les mieux notées</p>
          <p className='home__mostTrendedMovies--viewAll'>Tout voir</p>
        </span>
        <MostViewedTvShows />
      </div>
    </div>
  );
};

export default Movie;

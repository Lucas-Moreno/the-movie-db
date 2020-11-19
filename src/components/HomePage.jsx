import React from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';
import MostTrendedMovies from './HomeComponents/MostTrendedMovies';
import SearchBar from './Search/Search';

import '../scss/style.scss';

const Movie = () => {
  return (
    <div className='home'>
      <h1>Home page</h1>
      <h1>Qu’allez vous visionner aujourd’hui?</h1>
      <h2>Search Bar</h2>
      <SearchBar />
      <div className='home__sliderContainer'>
        <span>
          <p className='home__sliderContainer--title'>Les meilleurs films</p>
          <p className='home__sliderContainer--viewAll'>Tout voir</p>
        </span>

        <MostTrendedMovies />
      </div>
      <div className='home__sliderContainer'>
        <span>
          <p className='home__sliderContainer--title'>Les films les mieux notés</p>
          <p className='home__sliderContainer--viewAll'>Tout voir</p>
        </span>
        <MostViewedMovies />
      </div>
      <div className='home__sliderContainer'>
        <span>
          <p className='home__sliderContainer--title'>Séries les mieux notées</p>
          <p className='home__sliderContainer--viewAll'>Tout voir</p>
        </span>
        <MostViewedTvShows />
      </div>
    </div>
  );
};

export default Movie;

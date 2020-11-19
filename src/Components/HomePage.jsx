import React, { Fragment } from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';
import MostTrendedMovies from './HomeComponents/MostTrendedMovies';
import SearchBar from './Search/Search';
import AllKinds from './HomeComponents/AllKinds';

import '../scss/style.scss';

const Movie = () => {
  return (
    <Fragment>
      <div className='home'>
        <span className='home__header'>
          <h1 className='home__header--title'>Qu’allez vous visionner aujourd’hui?</h1>
          <SearchBar />
        </span>
        <div className='home__sliderContainer'>
          <span>
            <p className='home__sliderContainer--title'>Films du moment</p>
            <p className='home__sliderContainer--viewAll'>Tout voir</p>
          </span>
          <MostTrendedMovies />
        </div>
        <div className='home__sliderContainer'>
          <span>
            <p className='home__sliderContainer--title'>Films les mieux notés</p>
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
      <div>
        <AllKinds />
      </div>
    </Fragment>
  );
};

export default Movie;

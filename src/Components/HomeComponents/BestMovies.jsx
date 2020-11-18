import React from 'react';
import '../../css/bestMovies.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BestMovies = () => {
  const [bestMovies, setPersons] = useState([]);

  const API_KEY = process.env.REACT_APP_APIKEY;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
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
      {/* {bestMovies.map((bestMovie) => ( */}
      <Carousel
        className='carousel-container'
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        arrows={true}
      >
        <div className='yo'>
          <p>Coucou</p>
        </div>
        <div className='yo'>
          <p>Hey</p>
        </div>
        <div className='yo'>
          <p>Yo</p>
        </div>
        <div className='yo'>
          <p>Hey</p>
        </div>
      </Carousel>
      {/* // ))} */}
    </div>
  );
};

export default BestMovies;

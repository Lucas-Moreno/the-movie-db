import React from 'react';
import '../../scss/style.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SliderForMovies from '../Sliders/SliderForMovies';

const MostViewedThread = () => {
  const [mostViewedThread, setMostViewedThread] = useState([]);

  const API_KEY = process.env.REACT_APP_APIKEY;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((res) => {
        const mostViewedThreadResults = res.data.results;
        setMostViewedThread(mostViewedThreadResults);
        console.log(mostViewedThreadResults);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='mostViewedThread'>
      <img src='' alt='' />
      <SliderForMovies resultsOfRequest={mostViewedThread} />
    </div>
  );
};

export default MostViewedThread;

import React from 'react';
import '../../scss/style.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SliderForTvShows from '../Sliders/SliderForTvShows';

const MostViewedThread = () => {
  const [mostViewedThread, setMostViewedThread] = useState([]);

  const API_KEY = process.env.REACT_APP_APIKEY;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        const mostViewedThreadResults = res.data.results;
        setMostViewedThread(mostViewedThreadResults);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <div className='mostViewedThread'>
      <img src='' alt='' />
      <SliderForTvShows resultsOfRequest={mostViewedThread} />
    </div>
  );
};

export default MostViewedThread;

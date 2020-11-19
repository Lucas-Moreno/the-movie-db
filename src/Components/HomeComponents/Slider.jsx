import React, { useState } from 'react';
import '../../scss/bestMovies.scss';

const ImageSlider = ({ bestMovies }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % bestMovies.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(bestMovies.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    bestMovies.length > 0 && (
      <div className='container'>
        <button onClick={slideLeft}>{'<'}</button>
        <div className='container__slider'>
          {bestMovies.slice(index, index + 4).map((item) => (
            <div key={item.id} {...item} className='container__slider--card'>
              <h1>{item.title}</h1>
              <p>{item.release_date}</p>
            </div>
          ))}
        </div>

        <button onClick={slideRight}>{'>'}</button>
      </div>
    )
  );
};

export default ImageSlider;

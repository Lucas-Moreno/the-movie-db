import React, { useState } from 'react';
import '../../css/bestMovies.css';

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
      <div className='slider'>
        <button onClick={slideLeft}>{'<'}</button>
        {/* <div className='yo'>
          <p key={index}>{bestMovies[index].title}</p>
          <p>{bestMovies[index].release_date}</p>
        </div>
        <div className='yo'>
          <p key={index + 1}>{bestMovies[index + 1].title}</p>
          <p>{bestMovies[index].release_date}</p>
        </div>
        <div className='yo'>
          <p key={index + 2}>{bestMovies[index + 2].title}</p>
          <p>{bestMovies[index].release_date}</p>
        </div>
        <div className='yo'>
          <p key={index + 3}>{bestMovies[index + 3].title}</p>
          <p>{bestMovies[index].release_date}</p>
        </div> */}
        <div className='slider'>
          {bestMovies.slice(index, index + 3).map((item) => (
            <div key={item.id} {...item} className='yo'>
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

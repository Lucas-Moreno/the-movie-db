import React, { useState } from 'react';
import '../../scss/style.scss';

const Slider = ({ resultsOfRequest }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % resultsOfRequest.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(resultsOfRequest.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const img = `https://image.tmdb.org/t/p/w500`;

  return (
    resultsOfRequest.length > 0 && (
      <div className='container'>
        <button onClick={slideLeft}>{'<'}</button>
        <div className='container__slider'>
          {resultsOfRequest.slice(index, index + 4).map((result) => (
            <div key={result.id} {...result} className='container__slider--card'>
              <img
                src={img + result.poster_path}
                alt='Image'
                className='container__slider--card--image'
              />
              <h1 className='container__slider--card--title'>{result.title}</h1>
              <p className='container__slider--card--date'>{result.release_date}</p>
            </div>
          ))}
        </div>
        <button onClick={slideRight}>
          <svg
            width='15'
            height='66'
            viewBox='0 0 15 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='15' height='66' fill='black' fill-opacity='0.5' />
            <path
              d='M11.4526 33.2778L7.05621 37.7395C6.744 38.0576 6.2356 38.0576 5.9224 37.7395C5.6096 37.4221 5.6096 36.9062 5.9224 36.5883L9.75142 32.7016L5.9224 28.8144C5.6088 28.4965 5.6096 27.981 5.9224 27.663C6.0788 27.5038 6.2844 27.4243 6.4896 27.4243C6.695 27.4243 6.90081 27.5038 7.05741 27.663L11.4524 32.1248C11.7658 32.443 11.7658 32.9593 11.4526 33.2778Z'
              fill='#4B95C3'
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default Slider;

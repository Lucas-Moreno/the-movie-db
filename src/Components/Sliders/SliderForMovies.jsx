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

  return (
    resultsOfRequest.length > 0 && (
      <div className='container'>
        <button onClick={slideLeft}>{'<'}</button>
        <div className='container__slider'>
          {resultsOfRequest.slice(index, index + 4).map((result) => (
            <div key={result.id} {...result} className='container__slider--card'>
              <img src='' alt='Image' />
              <h1 className='container__slider--card--title'>{result.title}</h1>
              <p className='container__slider--card--date'>{result.release_date}</p>
            </div>
          ))}
        </div>
        <button onClick={slideRight}>
          <svg
            width='6'
            height='11'
            viewBox='0 0 6 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.76512 5.76622L1.36871 10.1612C1.0565 10.4746 0.548102 10.4746 0.234901 10.1612C-0.0779002 9.84864 -0.0779002 9.34044 0.234901 9.02724L4.06392 5.19862L0.234901 1.36941C-0.0787002 1.0562 -0.0779002 0.548402 0.234901 0.235201C0.391302 0.0784003 0.596903 0 0.802103 0C1.0075 0 1.21331 0.0784003 1.36991 0.235201L5.76492 4.63042C6.07833 4.94382 6.07833 5.45242 5.76512 5.76622Z'
              fill='#FFD700'
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default Slider;

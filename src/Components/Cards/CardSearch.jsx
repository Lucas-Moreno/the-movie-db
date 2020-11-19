import React from 'react';

import '../../scss/style.scss';

const CardSearch = ({ x }) => {
  const img = `https://image.tmdb.org/t/p/w500`;

  return x.slice(0, 4).map((item) => (
    <div className='cardSearch'>
      <img src={img + item.poster_path} alt='' />
      <h1>{item.title}</h1>
    </div>
  ));
};
export default CardSearch;

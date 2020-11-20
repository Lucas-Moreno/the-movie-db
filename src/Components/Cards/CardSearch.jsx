import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

const CardSearch = ({ result }) => {
  const img = `https://image.tmdb.org/t/p/w500`;

  return result.slice(0, 4).map((item) => (
    <Link to={'/movie/' + item.id} key={item.id} className='cardSearch'>
      <li className='cardSearch'>
        <img src={img + item.poster_path} alt='' />
        <h1>{item.title}</h1>
      </li>
    </Link>
  ));
};
export default CardSearch;

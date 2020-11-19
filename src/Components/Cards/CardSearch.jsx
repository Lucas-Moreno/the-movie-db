import React from 'react';

import '../../scss/style.scss';

const CardSearch = ({ x }) => {
  return x.slice(0, 4).map((item) => (
    <div className='cardSearch'>
      {/* <img src={src} alt='' /> */}
      <h1>{item.title}</h1>
      <div>
        <p>cc</p>
        <p>c</p>
      </div>
    </div>
  ));
};
export default CardSearch;

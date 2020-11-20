import React from 'react';
import img from '../../assets/imageFooter.jpg';
import '../../scss/style.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={img} alt='Img' />
      <div>
        <h1 className='footer--title'>“Voilà, cadeau de...Noël”</h1>
        <p className='footer--copyright'>© 2020 Hetic community</p>
      </div>
    </div>
  );
};
export default Footer;

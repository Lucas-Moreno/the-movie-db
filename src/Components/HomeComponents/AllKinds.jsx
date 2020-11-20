import React, { useState, useEffect } from 'react';
import CardGenre from '../HomeComponents/CardGenre';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import '../../scss/components/allKinds/allKinds.scss';

const AllKinds = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    function windowResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', windowResize);
    // return () => {
    //   window.removeEventListener('resize', windowResize);
    // };
  }, []);

  return (
    <div>
      {width >= 768 ? (
        <Slider dots slidesPerRow={5} centerMode={true}>
          <Link to='/movies/28/Action'>
            <CardGenre name='Action' />
          </Link>
          <Link to='/movies/53/Thriller'>
            <CardGenre name='Thriller' />
          </Link>
          <Link to='/movies/10749/Romance'>
            <CardGenre name='Romance' />
          </Link>
          <Link to='/movies/12/Aventure'>
            <CardGenre name='Aventure' />
          </Link>
          <Link to='/movies/16/Animation'>
            <CardGenre name='Animation' />
          </Link>
          <Link to='/movies/35/Comedie'>
            <CardGenre name='Comedie' />
          </Link>
          <Link to='/movies/80/Crime'>
            <CardGenre name='Crime' />
          </Link>
          <Link to='/movies/99/Documentaire'>
            <CardGenre name='Documentaire' />
          </Link>
          <Link to='/movies/18/Drama'>
            <CardGenre name='Drama' />
          </Link>
          <Link to='/movies/10751/Famille'>
            <CardGenre name='Famille' />
          </Link>
          <Link to='/movies/14/Fantaisie'>
            <CardGenre name='Fantaisie' />
          </Link>
          <Link to='/movies/16/Histoire'>
            <CardGenre name='Histoire' />
          </Link>
          <Link to='/movies/16/Musique'>
            <CardGenre name='Musique' />
          </Link>
          <Link to='/movies/9648/Mystere'>
            <CardGenre name='Mystere' />
          </Link>
          <Link to='/movies/878/ScienceFiction'>
            <CardGenre name='ScienceFiction' />
          </Link>
          <Link to='/movies/10770/TvMovie'>
            <CardGenre name='TvMovie' />
          </Link>
          <Link to='/movies/27/Horreur'>
            <CardGenre name='Horreur' />
          </Link>
          <Link to='/movies/10752/Guerre'>
            <CardGenre name='Guerre' />
          </Link>
          <Link to='/movies/37/Western'>
            <CardGenre name='Western' />
          </Link>
        </Slider>
      ) : (
        <Slider dots slidesPerRow={1} centerMode={true}>
          <Link to='/movies/28/Action'>
            <CardGenre name='Action' />
          </Link>
          <Link to='/movies/53/Thriller'>
            <CardGenre name='Thriller' />
          </Link>
          <Link to='/movies/10749/Romance'>
            <CardGenre name='Romance' />
          </Link>
          <Link to='/movies/12/Aventure'>
            <CardGenre name='Aventure' />
          </Link>
          <Link to='/movies/16/Animation'>
            <CardGenre name='Animation' />
          </Link>
          <Link to='/movies/35/Comedie'>
            <CardGenre name='Comedie' />
          </Link>
          <Link to='/movies/80/Crime'>
            <CardGenre name='Crime' />
          </Link>
          <Link to='/movies/99/Documentaire'>
            <CardGenre name='Documentaire' />
          </Link>
          <Link to='/movies/18/Drama'>
            <CardGenre name='Drama' />
          </Link>
          <Link to='/movies/10751/Famille'>
            <CardGenre name='Famille' />
          </Link>
          <Link to='/movies/14/Fantaisie'>
            <CardGenre name='Fantaisie' />
          </Link>
          <Link to='/movies/16/Histoire'>
            <CardGenre name='Histoire' />
          </Link>
          <Link to='/movies/16/Musique'>
            <CardGenre name='Musique' />
          </Link>
          <Link to='/movies/9648/Mystere'>
            <CardGenre name='Mystere' />
          </Link>
          <Link to='/movies/878/ScienceFiction'>
            <CardGenre name='ScienceFiction' />
          </Link>
          <Link to='/movies/10770/TvMovie'>
            <CardGenre name='TvMovie' />
          </Link>
          <Link to='/movies/27/Horreur'>
            <CardGenre name='Horreur' />
          </Link>
          <Link to='/movies/10752/Guerre'>
            <CardGenre name='Guerre' />
          </Link>
          <Link to='/movies/37/Western'>
            <CardGenre name='Western' />
          </Link>
        </Slider>
      )}
    </div>
  );
};

export default AllKinds;

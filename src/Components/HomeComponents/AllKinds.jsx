import React, { useState } from 'react';
import CardGenre from "../HomeComponents/CardGenre";
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import '../../scss/components/allKinds/allKinds.scss';


const AllKinds = () => {

  let id = 6

  return (
    <div className="container__carousel">
      <Slider dots slidesPerRow={id}>
        <Link to="/movie/film/Action">
          <CardGenre name="Action" />
        </Link>
        <Link to="/movie/film/Thriller">
          <CardGenre name="Thriller" />
        </Link>
        <Link to="/movie/film/Romance">
          <CardGenre name="Romance" />
        </Link>
        <Link to="/movie/film/Aventure">
          <CardGenre name="Aventure" />
        </Link>
        <Link to="/movie/film/Animation">
          <CardGenre name="Animation" />
        </Link>
        <Link to="/movie/film/Comedie">
          <CardGenre name="Comedie" />
        </Link>
        <Link to="/movie/film/Crime">
          <CardGenre name="Crime" />
        </Link>
        <Link to="/movie/film/Documentaire">
          <CardGenre name="Documentaire" />
        </Link>
        <Link to="/movie/film/Drama">
          <CardGenre name="Drama" />
        </Link>
        <Link to="/movie/film/Famille">
          <CardGenre name="Famille" />
        </Link>
        <Link to="/movie/film/Fantaisie">
          <CardGenre name="Fantaisie" />
        </Link>
        <Link to="/movie/film/Histoire">
          <CardGenre name="Histoire" />
        </Link>
        <Link to="/movie/film/Musique">
          <CardGenre name="Musique" />
        </Link>
        <Link to="/movie/film/Mystere">
          <CardGenre name="Mystere" />
        </Link>
        <Link to="/movie/film/ScienceFiction">
          <CardGenre name="ScienceFiction" />
        </Link>
        <Link to="/movie/film/TvMovie">
          <CardGenre name="TvMovie" />
        </Link>
        <Link to="/movie/film/Horreur">
          <CardGenre name="Horreur" />
        </Link>
        <Link to="/movie/film/Guerre">
          <CardGenre name="Guerre" />
        </Link>
        <Link to="/movie/film/Western">
          <CardGenre name="Western" />
        </Link>
      </Slider>
    </div>
  );
};

export default AllKinds;

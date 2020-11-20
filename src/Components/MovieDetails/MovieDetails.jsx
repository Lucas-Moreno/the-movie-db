import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../scss/style.scss';

const MovieDetails = (routerProps) => {
  let id = parseInt(routerProps.match.params.id);
  const API_KEY = process.env.REACT_APP_APIKEY;

  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const urlSimilarMovie = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(urlSimilarMovie)
      .then((response) => {
        setSimilarMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, url, urlSimilarMovie]);

  const img = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
  const imgSimilar = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className='movieDetails'>
      <Link to='/movie'>
        <svg
          width='7'
          height='13'
          viewBox='0 0 7 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='movieDetails__return'
        >
          <path
            d='M0.271099 7.21035L5.3457 12.7061C5.70606 13.098 6.29289 13.098 6.6544 12.7061C7.01545 12.3152 7.01545 11.6797 6.6544 11.2881L2.23473 6.50059L6.6544 1.71237C7.01638 1.32073 7.01545 0.685747 6.6544 0.294106C6.47387 0.0980354 6.23656 0 5.9997 0C5.76262 0 5.52507 0.0980354 5.34431 0.294106L0.27133 5.79009C-0.090416 6.18198 -0.090416 6.81796 0.271099 7.21035Z'
            fill='white'
          />
        </svg>
      </Link>
      <div>
        <p className='movieDetails__title'>{movies.original_title}</p>
        <p className='movieDetails__score'>{movies.vote_average}</p>
        <span className='movieDetails__vote'>({movies.vote_count}) votants</span>
        <a className='movieDetails__link' href={movies.homepage}>
          Voir le site officiel
        </a>
        <p className='movieDetails__synopsis'>Synopsis</p>
        <p className='movieDetails__content'>
          {movies.overview ? movies.overview : 'Pas de synopsis'}
        </p>
        <div className='movieDetails__cover'>
          <img className='movieDetails__cover__content' src={img} />
        </div>
      </div>
      <div>
        {similarMovies.slice(0, 4).map((similarMovie) => (
          <div className='movieDetails__similar'>
            <p className='movieDetails__similar__title'>{similarMovie.original_title}</p>
            <img
              className='movieDetails__similar__'
              src={imgSimilar + similarMovie.poster_path}
              alt='Affiche du film'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;

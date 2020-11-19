import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";
import '../../scss/style.scss';


const MovieDetails = (routerProps) => {
  let id = parseInt(routerProps.match.params.id)
  const API_KEY = process.env.REACT_APP_APIKEY;

  const [movies, setMovies] = useState([])

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id, url]);


  const img = `https://image.tmdb.org/t/p/w500${movies.poster_path}`

  return (
    <div>
      <Link to="/movie">
        <button>Movie</button>
      </Link>
      <div>
        <p className="movieDetails__title">{movies.original_title}</p>
        <p className="movieDetails__score">Note du film : {movies.vote_average}</p>
        <span className="movieDetails__vote">({movies.vote_count}) votants</span>
        <p>Lien du film : {movies.homepage ? movies.homepage : "Pas de lien"}</p>
        <p className="movieDetails__synopsis">Synopsis</p>
        <p className="movieDetails__content">{movies.overview ? movies.overview : "Pas de synopsis"}</p>
        <div className="movieDetails__cover">
          <img className="movieDetails__cover__content" src={img} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
import React, { useState, useEffect } from 'react'
import axios from "axios";


const MovieDetails = (routerProps) => {
  let id = parseInt(routerProps.match.params.id)

  const [movies, setMovies] = useState([])

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=325e4a633b85a4ad0f68aa6594634b88`;

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
      <h1>Page Movie details</h1>
      <p>Information en fonction de l'id numéro : {id}</p>
      <br />
      <div>
        <p>Titre du film : {movies.original_title}</p>
        <p>Synopsis du film : {movies.overview ? movies.overview : "Pas de synopsis"}</p>
        <p>Lien du film : {movies.homepage ? movies.homepage : "Pas de lien"}</p>
        <p>Note du film : {movies.vote_average}</p>
        <p>Nombres de votes : {movies.vote_count}</p>
        <div>
          <p>Image :</p>
          <img src={img} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
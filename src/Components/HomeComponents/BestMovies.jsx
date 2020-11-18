import React from 'react';
import '../../css/bestMovies.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BestMovies = () => {
  const [latestFilms, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/latest?api_key=325e4a633b85a4ad0f68aa6594634b88&language=en-US`,
      )
      .then((res) => {
        console.log('data', res);
        const latestFilmsA = res.data;
        setPersons(latestFilmsA);
        console.log('persons', latestFilmsA);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='bestmovies'>
      <h1>Les meilleurs films</h1>
      <p>Tout voir</p>
      {/* <p>
        {data.persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </p> */}
      <p>{JSON.stringify(latestFilms)}</p>
    </div>
  );
};

export default BestMovies;

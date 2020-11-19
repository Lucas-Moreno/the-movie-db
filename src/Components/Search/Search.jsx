import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/style.scss';
import CardSearch from '../Cards/CardSearch';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = process.env.REACT_APP_APIKEY;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`,
        )
        .then((res) => {
          const mostViewedThreadResults = res.data.results;
          mostViewedThreadResults.filter((result) => console.log(result));
          setSearchResults(mostViewedThreadResults);
        })
        .catch((err) => console.log(err));
    }
  }, [searchTerm]);

  return (
    <div className='searchbar'>
      <input type='text' value={searchTerm} onChange={handleChange} className='searchbar--input' />
      {/* <ul className='searchbar--search'> */}
      {searchTerm && <CardSearch result={searchResults} className='searchbar--search' />}
      {/* </ul> */}
    </div>
  );
};
export default SearchBar;

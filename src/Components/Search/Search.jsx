import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/style.scss';

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
      <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.slice(0, 4).map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;

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
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((res) => {
        const mostViewedThreadResults = res.data.results;
        console.log(mostViewedThreadResults);
        mostViewedThreadResults.filter((result) => console.log(result));
        setSearchResults(mostViewedThreadResults);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <div className='searchbar'>
      <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;

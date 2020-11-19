import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import './Series.scoped.scss'

const Series = ({match}) => {
  const [series, setSeries] = useState([]);
  const APIKEY = process.env.REACT_APP_APIKEY;
  let history = useHistory();

  const filter = match.params.filter;
  const filterExists = filter.match(/(popular)|(top_rated)/);
  if (!filterExists) history.push('/NotFound');
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/${filter}?api_key=${APIKEY}`)
    .then(res => {
      const series = res.data.results;
      setSeries(series);
    })
    .catch(err => console.log(err));
  }, [filter, APIKEY]);


  return (
    <main>
      <Link to="/" className="link">
        <svg className="arrow-icon" viewBox="0 0 6.9 13"><path fill="#f5f6f6" d="M.3 7.2l5.1 5.5a.85.85 0 0 0 1.3 0c.4-.4.4-1 0-1.4L2.2 6.5l4.4-4.8c.4-.4.4-1 0-1.4C6.5.1 6.2 0 6 0a1.08 1.08 0 0 0-.7.3l-5 5.5c-.4.4-.4 1 0 1.4z"/></svg>
        <h1 className="link-title">Séries les mieux notées</h1>
      </Link>
      <p className="results-number">{series.length} résultats trouvés</p>
      <div className="series-container">
        {series.map(serie => {
          return  <Link to={`/serie/${serie.id}`} className="serie-container" key={serie.id}>
            <img className="serie-picture" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} alt={serie.name}/>
            <div className="serie-description-container">
              <p className="serie-title">{serie.name}</p>
              <div className="serie-score-container">
                <p>{serie.vote_average}</p>
                <svg className="star-icon" viewBox="0 0 17 16"><path fill="#4b95c3" d="M12.2 4.6l3.7.5c1 .1 1.5 1.4.7 2.1L14 9.8c-.3.3-.4.7-.4 1.1l.6 3.6c.2 1-.9 1.8-1.8 1.3l-3.3-1.7c-.4-.2-.8-.2-1.2 0l-3.3 1.7c-.9.5-2-.3-1.8-1.3l.6-3.6c.1-.4-.1-.8-.4-1.1L.4 7.3c-.8-.7-.3-2 .7-2.1l3.7-.5c.4-.1.8-.3 1-.7L7.4.7a1.32 1.32 0 0 1 2.3 0L11.3 4c.2.3.5.6.9.6z"/></svg>
                <p>({serie.vote_count} votes)</p>
              </div>
              <div className="serie-synopsis-container">
                <p className="serie-synopsis-title">Synopsis</p>
                <p className="serie-synopsis-text">{serie.overview}</p>
              </div>
            </div>
          </Link>
        })}
      </div>
    </main>
  )
}

export default Series;
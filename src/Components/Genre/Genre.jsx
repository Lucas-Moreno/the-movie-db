import React from 'react';
import useMovieByGenre from '../../hooks/useMovieByGenre';
import { Link } from 'react-router-dom';

const FilmAction = (routerFilm) => {
  const genreAction = useMovieByGenre(28);
  const genreThriller = useMovieByGenre(53);
  const genreRomance = useMovieByGenre(10749);
  const genreAdventure = useMovieByGenre(12);
  const genreAnimation = useMovieByGenre(16);
  const genreComedy = useMovieByGenre(35);
  const genreCrime = useMovieByGenre(80);
  const genreDocumentary = useMovieByGenre(99);
  const genreDrama = useMovieByGenre(18);
  const genreFamily = useMovieByGenre(10751);
  const genreFantasy = useMovieByGenre(14);
  const genreHistory = useMovieByGenre(36);
  const genreMusic = useMovieByGenre(16);
  const genreMystery = useMovieByGenre(9648);
  const genreScienceFiction = useMovieByGenre(878);
  const genreTVMovie = useMovieByGenre(10770);
  const genreHorror = useMovieByGenre(27);
  const genreGuerre = useMovieByGenre(10752);
  const genreWestern = useMovieByGenre(37);

  const margin = {
    marginBottom: '3vh',
    marginTop: '3vh',
  };
  const cards = {
    display: 'flex',
    flexDirection: 'column',
  };

  const card = {
    marginRight: '1vw',
    border: '1px solid gray',
  };

  const img = `https://image.tmdb.org/t/p/w500`;
  return (
    <div>
      <Link to="/movie">
        <button>Retourner à la home</button>
      </Link>
      <h1 style={margin}> Tout les films {routerFilm.match.params.genre} :</h1>
      {routerFilm.match.params.genre === 'Action' && (
        <div style={cards}>
          {genreAction.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Action' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Horreur' && (
        <div style={cards}>
          {genreThriller.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Horreur' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Romance' && (
        <div style={cards}>
          {genreRomance.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Romance' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Aventure' && (
        <div style={cards}>
          {genreAdventure.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Adventure' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Animation' && (
        <div style={cards}>
          {genreAnimation.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Animation' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Comedie' && (
        <div style={cards}>
          {genreComedy.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Comedy' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Crime' && (
        <div style={cards}>
          {genreCrime.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Crime' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Documentaire' && (
        <div style={cards}>
          {genreDocumentary.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Documentaire' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Drama' && (
        <div style={cards}>
          {genreDrama.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Drama' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Famille' && (
        <div style={cards}>
          {genreFamily.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Famille' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Fantaisie' && (
        <div style={cards}>
          {genreFantasy.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Fantaisie' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Histoire' && (
        <div style={cards}>
          {genreHistory.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Histoire' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Musique' && (
        <div style={cards}>
          {genreMusic.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Musique' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Mystere' && (
        <div style={cards}>
          {genreMystery.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Mystere' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'ScienceFiction' && (
        <div style={cards}>
          {genreScienceFiction.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='ScienceFiction' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'TvMovie' && (
        <div style={cards}>
          {genreTVMovie.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='TvMovie' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Thriller' && (
        <div style={cards}>
          {genreHorror.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Thriller' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Guerre' && (
        <div style={cards}>
          {genreGuerre.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Guerre' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
      {routerFilm.match.params.genre === 'Western' && (
        <div style={cards}>
          {genreWestern.map((genre) => (
            <p style={card}>
              <img src={img + `${genre.poster_path}`} alt='Western' />
              <div>Titre du film : {genre.original_title}</div>
              <div>Date de Sortie : {genre.release_date}</div>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilmAction;

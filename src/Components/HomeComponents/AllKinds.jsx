import React from 'react';
import useMovieByGenre from "../../../src/hooks/useMovieByGenre";


const AllKinds = () => {
  const marginTop = {
    marginTop: "5vh"
  };
  const margin = {
    marginBottom: "3vh",
    marginTop: "3vh"
  }
  const cards = {
    display: "flex",
    justifyContent: "center"
  }
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    marginTop: "3vh"
  }
  const card = {
    marginRight: "1vw",
    border: "1px solid gray"
  }


  const genreAction = useMovieByGenre(28)
  const genreThriller = useMovieByGenre(53)
  const genreRomance = useMovieByGenre(10749)

  const img = `https://image.tmdb.org/t/p/w500`

  return (
    < div style={marginTop} >
      <div style={container}>
        <h1 style={margin}>Film d'Action :</h1>
        <div style={cards}>
          {
            genreAction.map(genre =>
              <p style={card}>
                <img src={img + `${genre.poster_path}`} alt="action" />
                <div>
                  {genre.original_title}
                </div>
                <div>
                  {genre.release_date}
                </div>
              </p>
            )
          }
        </div>
        <h1 style={margin}>Film d'Horreur :</h1>
        <div style={cards}>
          {
            genreThriller.map(genre =>
              <p style={card}>
                <div>
                  <img src={img + `${genre.poster_path}`} alt="thriller" />
                  <div>
                    {genre.original_title}
                  </div>
                  <div>
                    {genre.release_date}
                  </div>
                </div>
              </p>
            )
          }
        </div>
        <h1 style={margin}>Film de Romance :</h1>
        <div style={cards}>
          {
            genreRomance.map(genre =>
              <p style={card}>
                <img src={img + `${genre.poster_path}`} alt="romance" />
                <div>
                  {genre.original_title}
                </div>
                <div>
                  {genre.release_date}
                </div>
              </p>
            )
          }
        </div>
      </div>
    </div >
  );
};

export default AllKinds;

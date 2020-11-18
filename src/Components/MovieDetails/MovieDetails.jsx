import React from 'react'

const MovieDetails = (routerProps) => {
  let id = parseInt(routerProps.match.params.id)
  return (
    <div>
      <h1>Page Movie details</h1>
      {console.log(routerProps)}
      <p>id : {id}</p>
    </div>
  )
}

export default MovieDetails
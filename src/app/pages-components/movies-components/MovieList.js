import React from 'react'

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent
  return (
    <div>
      {props.movies.map((movie) => (
        <div key={movie.imdbID} className="image-container inline">
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList

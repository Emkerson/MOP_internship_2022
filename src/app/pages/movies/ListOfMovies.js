import React, { useState, useEffect } from 'react'
import '../style/ListOfMovies.css'
import { Link } from 'react-router-dom'
import MovieList from '../../pages-components/movies-components/MovieList'
import HeadingElement from '../../common/components/HeadingElement'
import SearchBox from '../../pages-components/movies-components/SearchBox'
import AddFavourites from '../../pages-components/movies-components/AddFavourites'
import RemoveFavourites from '../../pages-components/movies-components/RemoveFavourites'
import Button from '../../common/components/Button'

const ListOfMovies = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=75512bfb`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID,
    )
    setFavourites(newFavouriteList)
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="movie-app">
      <div className="ui secondary pointing menu">
        <div>
          <HeadingElement heading="Movies" />
        </div>
        <div className="right menu">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <Link to="/login" className="ui item">
            <Button onClick={localStorage.clear()} className='logout-button' text='Logout'/>
        </Link>
      </div>
      <div className="inline">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className="favourites-text">
        <HeadingElement heading="Favourites" />
      </div>
      <div className="inline">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  )
}

export default ListOfMovies

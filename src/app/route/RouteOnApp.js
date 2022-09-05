import React from 'react'
import NavBar from '../page-components/header-navigation/NavBar'
import LogIn from '../pages/login/LogIn'
import ListOfMovies from '../pages/movies/ListOfMovies'
import SignUp from '../pages/signUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const RouteOnApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<ListOfMovies />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="movies" element={<ListOfMovies />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RouteOnApp

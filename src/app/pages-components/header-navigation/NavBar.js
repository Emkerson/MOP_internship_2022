import React from 'react'
import Button from '../../common/components/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/movies" className="item">
        <Button className="ui button" text="Movies list" />
      </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          <Button className="ui button" text="Log in " />
        </Link>
      </div>
      <div className="right menu">
        <Link to="/signup" className="item">
          <Button className="ui button" text="Sign up " />
        </Link>
      </div>
    </div>
  )
}
export default NavBar

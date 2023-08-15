import React from 'react'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link className='btn btn-primary mx-1' role='button' to="/login" >Login</Link>
        <Link className='btn btn-primary' role='button' to="/signup" >Signup</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

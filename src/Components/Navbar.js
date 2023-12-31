import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/Login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Cloud Notebook</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Notes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className='btn btn-primary mx-1' role='button' to="/login" >Login</Link>
              <Link className='btn btn-primary' role='button' to="/signup" >Signup</Link>
            </form> : <button onClick={handlelogout} className="btn btn-primary">Logout</button>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

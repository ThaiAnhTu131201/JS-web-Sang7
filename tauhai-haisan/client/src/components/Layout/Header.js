import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {HiShoppingCart} from 'react-icons/hi'
import {BsFillRocketTakeoffFill} from 'react-icons/bs'

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" ><BsFillRocketTakeoffFill />
            Tấu Hài-Hải Sản
      </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" href="#">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" href="#">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/policy" className="nav-link" href="#">Policy</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login - Register
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/register" className="dropdown-item" href="#">Register</NavLink></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><NavLink to="/login" className="dropdown-item" href="#">Login</NavLink></li>
            </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">
            <HiShoppingCart />Cart (0) 
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
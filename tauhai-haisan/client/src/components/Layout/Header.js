import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import "./Header.css"

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🛒 Tấu Hài Hải Sản
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/policy" className="nav-link" >Policy</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              {!auth?.user ? (
                <>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Login - Register
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink to="/register" className="dropdown-item" >Register</NavLink></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><NavLink to="/login" className="dropdown-item" >Login</NavLink></li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hello {auth.user.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink 
                        to={`/dashboard/${auth?.user?.role === 1 ?  'admin':'user' }`} 
                        className="dropdown-item" >
                        Dashboard
                      </NavLink></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <h1>Nebula</h1> */}
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <div className="navLogo">
            <Link to="/">
              <img className="logo" src={'/images/logo.png'} alt="" />
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/products">Shop All Sweets</a>
              </li>
              <li>
                <a href="/" onClick={handleClick}>
                  Logout
                </a>
              </li>
              <li>
                <a href="/cart/:id" className="circle">
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="navbar">
          {/* The navbar will show these links before you log in */}
          <div className="navLogo">
            <Link to="/">
              <img className="logo" src={'/images/logo.png'} alt="" />
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/products">Shop All Sweets</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>

              <li>
                <a href="/cart/:id">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

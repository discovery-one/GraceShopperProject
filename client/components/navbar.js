import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, isAdmin, userId }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        isAdmin ? (
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
                  <a href="/products">View Products</a>
                </li>
                <li>
                  <a href="/users">View Users</a>
                </li>
                <li>
                  <a href="/" onClick={handleClick}>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
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
                  <a href={`/cart/${userId}`} className="circle">
                    Cart
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )
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
                <a href={`/cart/${userId}`}>Cart</a>
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
    isAdmin: !!state.auth.admin,
    userId: state.auth.id,
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

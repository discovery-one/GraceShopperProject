import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <h1>Nebula</h1> */}
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to='/'>Home</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
          <Link to='/products'>View Our Sweets</Link>
          <Link to='/cart/:id'>Cart</Link>
        </div>
      ) : (
        <div className='navbar'>
          {/* The navbar will show these links before you log in */}
          <Link to='/'>
            <img className='logo' src={'/images/logo.png'} alt='' />
          </Link>
          <Link to='/products'>Shop All Sweets</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/cart/:id'>Cart</Link>
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

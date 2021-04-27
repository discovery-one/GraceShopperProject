import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const AdminHome = (props) => {
  const firstName = props.firstName;
  return (
    <div>
      <div className="admin-banner">
        <div className="hero-text">
          <h1>Welcome, Astronaut {firstName}</h1>
        </div>
      </div>
      <div className="admin-how-it-works">
        <a href="/products" className="admin-links">
          <div className="column">
            <img
              className="home-illustration"
              src={'/images/croissant.png'}
              width="100%"
              alt=""
            />
            <h3>View All Products</h3>
          </div>
        </a>
        <a href="/create-product" className="admin-links">
          <div className="column">
            <img
              className="home-illustration"
              src={'/images/icecream.png'}
              width="100%"
              alt=""
            />
            <h3>Create New Product</h3>
          </div>
        </a>
        <a href="/users" className="admin-links">
          <div className="column">
            <img
              className="home-illustration"
              src={'/images/astronaut.png'}
              width="100%"
              alt=""
            />
            <h3>View All Users</h3>
          </div>
        </a>
      </div>
      <div className="home-image-block">
        <img className="image-block" src="/images/milkyway.png" alt="" />
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapStateToProps)(AdminHome);

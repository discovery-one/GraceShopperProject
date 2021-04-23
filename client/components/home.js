import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./AuthForm";

/**
 * COMPONENT
 */
export const Home = (props) => {
  return (
    <div>
      <h3>Welcome</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import history from './history';
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  Router,
  Link,
} from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
//import AuthForm from "./components/Authform.js";
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import AllProducts from './components/AllProducts';
import Cart from './components/cart';
import { me } from './store';
import Navbar from './components/navbar';
import AdminProducts from './components/AdminProducts';
import AdminSingleProduct from './components/AdminSingleProduct';
import AdminUsers from './components/AdminUsers';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isAdmin } = this.props;
    return (
      <Router history={history}>
        <div>
          {isAdmin ? (
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/products" component={AdminProducts} />
                <Route path="/products/:id" component={AdminSingleProduct} />
                <Route path="/cart/:id" component={Cart} />
                <Route path="/users/" component={AdminUsers} />
              </Switch>
            </main>
          ) : (
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/products" component={AllProducts} />
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/cart/:id" component={Cart} />
              </Switch>
            </main>
          )}
        </div>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isAdmin: !!state.auth.admin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

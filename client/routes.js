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
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import AllProducts from './components/AllProducts';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    //const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <main>
            {/* <h1>All Our Products</h1> */}
            <Switch>
              <Route exact path="/products" component={AllProducts} />
              <Route exact path="/products/:id" component={SingleProduct} />
              <Route path="/" component={Home} />
              <Route path="/cart/:id" component={Cart} />
            </Switch>
          </main>
        </div>
      </Router>

      //  {!--
      //     {isLoggedIn ? (
      //       <Switch>
      //         <Route path="/home" component={Home} />
      //         <Redirect to="/home" />
      //       </Switch>
      //     ) : (
      //       <Switch>
      //         <Route path='/' exact component={ Login } />
      //         <Route path="/login" component={Login} />
      //         <Route path="/signup" component={Signup} />
      //       </Switch>
      //     )}
      //   </div>

      //   --}
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
    isLoggedIn: !!state.auth.id,
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

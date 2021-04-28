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
import Home from './components/home';
import SingleProduct from './components/SingleProduct';
import AllProducts from './components/AllProducts';
import EditCart from './components/EditCart';
import { me } from './store';
import Navbar from './components/navbar';
import AdminProducts from './components/AdminProducts';
import AdminSingleProduct from './components/AdminSingleProduct';
import AdminUsers from './components/AdminUsers';
import AdminHome from './components/AdminHome';
import CreateProduct from './components/CreateProduct';
import CheckoutForm from './components/CheckoutForm';
import ConfirmationPage from './components/ConfirmationPage';

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
                <Route exact path="/" component={AdminHome} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/products" component={AdminProducts} />
                <Route path="/products/:id" component={AdminSingleProduct} />
                <Route path="/cart/:id" component={EditCart} />
                <Route path="/users/" component={AdminUsers} />
                <Route path="/create-product" component={CreateProduct} />
                <Route path="/checkout-form" component={CheckoutForm} />
                <Route path="/confirmation-page" component={ConfirmationPage} />
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
                <Route path="/cart/:id" component={EditCart} />
                <Route path="/checkout-form" component={CheckoutForm} />
                <Route path="/confirmation-page" component={ConfirmationPage} />
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

export default withRouter(connect(mapState, mapDispatch)(Routes));

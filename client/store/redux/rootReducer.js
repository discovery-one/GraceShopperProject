import { combineReducers } from 'redux';
import singleProductReducer from './singleProduct';
import authReducer from './auth';
import productsReducer from './products';
import cartReducer from './cart';
import usersReducer from './users';

const rootReducer = combineReducers({
  product: singleProductReducer,
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  users: usersReducer,
});

export default rootReducer;

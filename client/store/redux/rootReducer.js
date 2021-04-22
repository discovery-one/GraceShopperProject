import { combineReducers } from 'redux';
import singleProductReducer from './singleProduct';
import authReducer from './auth';
import productsReducer from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  product: singleProductReducer,
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

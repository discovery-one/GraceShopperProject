import { combineReducers } from 'redux';
import singleProductReducer from './singleProduct';
import authReducer from './auth';
import productsReducer from './products';
const rootReducer = combineReducers({
  product: singleProductReducer,
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;

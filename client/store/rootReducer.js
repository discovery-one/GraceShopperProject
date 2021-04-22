import { combineReducers } from 'redux';
import singleProductReducer from './singleProduct';
import productsReducer from '../store/redux/products';

const rootReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
});

export default rootReducer;

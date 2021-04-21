import { combineReducers } from 'redux';
import singleProductReducer from './singleProduct';

const rootReducer = combineReducers({
  product: singleProductReducer,
});

export default rootReducer;

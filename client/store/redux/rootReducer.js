import { combineReducers } from "redux";
import singleProductReducer from "./singleProduct";
import authReducer from "./auth";

const rootReducer = combineReducers({
  product: singleProductReducer,
  auth: authReducer,
});

export default rootReducer;

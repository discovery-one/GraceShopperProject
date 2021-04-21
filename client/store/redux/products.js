import axios from 'axios';

const initialState = [];

//action types
const SET_PRODUCTS = 'SET_PRODUCTS';

//action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

//thunk creators
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(setProducts(data));
    } catch (err) {
      console.log("something's wrong w/ fetchProducts! --->", err);
    }
  };
};

//reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

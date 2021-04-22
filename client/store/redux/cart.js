import axios from 'axios';

const initialState = [];

//action types:
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';

//action creator:
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const getCart = (order) => ({
  type: GET_CART,
  order,
});

//thunk creators:
export const addToCartThunk = (productId, history) => {
  return async (dispatch) => {
    try {
      const { data: added } = await axios.put(`/api/cart`);
      dispatch(addToCart(added));
      // history.push(`/product/`)
    } catch (error) {
      console.log("something's wrong w/ addToCartThunk! --->", err);
    }
  };
};

export const getCartThunk = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${orderId}`);
      dispatch(getCart(data));
    } catch (error) {
      console.log("something's wrong w/ getCartThunk! --->", err);
    }
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.order;
  }
}

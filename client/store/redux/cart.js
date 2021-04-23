import axios from 'axios';

const initialState = [];

//action types:
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_ITEM = 'DELETE_ITEM';

//action creator:
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const getCart = (order) => ({
  type: GET_CART,
  order,
});

export const deleteItem = (product) => ({
  type: DELETE_ITEM,
  product,
});

//thunk creators:
export const addToCartThunk = (orderId, productId, product, history) => {
  return async (dispatch) => {
    try {
      const { data: added } = await axios.put(
        `/api/cart/${orderId}/products/${productId}`,
        product
      );
      dispatch(addToCart(added));
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

export const deleteItemThunk = (orderId, productId, product, history) => {
  return async (dispatch) => {
    try {
      const { data: deleted } = await axios.delete(
        `/api/cart/${orderId}/products/${productId}`,
        product
      );
      dispatch(deleteItem(deleted));
      history.push(`/cart/${orderId}`);
    } catch (err) {
      console.log("something's wrong w/ deleteItemThunk! --->", err);
    }
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.order;
    case ADD_TO_CART:
      return action.product;
    case DELETE_ITEM:
      return action.product;
    default:
      return state;
  }
}

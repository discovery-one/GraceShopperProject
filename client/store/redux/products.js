import axios from 'axios';

const initialState = [];

//action types
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const createProduct = (createdProd) => ({
  type: CREATE_PRODUCT,
  createdProd,
});

export const deleteProduct = (deletingProd) => {
  return {
    type: DELETE_PRODUCT,
    deletingProd,
  };
};

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

export const fetchCreateProduct = (product) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/products', product);
    console.log(data);
    dispatch(createProduct(data));
  };
};

export const fetchDeleteProduct = (productId) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/products/${productId}`);
    dispatch(deleteProduct(data));
  };
};

//reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [...state, action.createdProd];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.deletingProd.id);
    default:
      return state;
  }
}

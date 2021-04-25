import axios from 'axios';
const initialState = [];

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const getSingleProduct = (product) => {
  return {
    type: GET_SINGLE_PRODUCT,
    product,
  };
};

export const editProduct = (editingProd) => {
  return {
    type: EDIT_PRODUCT,
    editingProd,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(getSingleProduct(data[0]));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchEditProduct = (product) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/products/${product.id}`, product);
    dispatch(editProduct(data));
  };
};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    case EDIT_PRODUCT:
      return action.editingProd;
    default:
      return state;
  }
}

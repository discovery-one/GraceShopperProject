import axios from 'axios';
const initialState = [];

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

export const getSingleProduct = (product) => {
  return {
    type: GET_SINGLE_PRODUCT,
    product,
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

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

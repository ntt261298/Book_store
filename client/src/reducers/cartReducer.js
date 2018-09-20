import { GET_CART, ADD_TO_CART } from '../actions/types';

const initialState = {
  cart: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return state;
    case ADD_TO_CART:
      return {
        ...state,
        // cart: payload
      }
    default:
      return state;
  }
}

import {  GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions/types';

const initialState ={
  carts: []
}

const cartItem = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          id: action.id,
          count: action.count,
          name: action.name,
          price: action.price
        };
      case REMOVE_FROM_CART:
        return state.id !== action.id;
      case UPDATE_CART_ITEM:
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign(
          {},
          state,
          {
            count: action.count,
          }
        );
      default:
        return state;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return state;
    case ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, cartItem(undefined, action)]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(item => cartItem(item, action))
      }
    case UPDATE_CART_ITEM:
      return state.map(item => cartItem(item, action));
    default:
      return state;
  }
}

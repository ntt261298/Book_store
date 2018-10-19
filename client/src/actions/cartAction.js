import axios from 'axios';
import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, USER_CHECKOUT } from './types';

export const getCart = () =>  {
  return {
    type: GET_CART
  }
}

// addToCart
export const addToCart = (id, count, name, price) => (
  {
    type: ADD_TO_CART,
    id,
    count,
    name,
    price
  }
);

// removeFromCart
export const removeFromCart = (id) => (
  {
    type: REMOVE_FROM_CART,
    id,
  }
);

// updateCartItem
export const updateCartItem = (id, count) => (
  {
    type: UPDATE_CART_ITEM,
    id,
    count,
  }
);

// checkoutCartItem
<<<<<<< HEAD
export const userCheckout = (id, email, phone, address, carts) => dispatch => {
=======
export const userCheckout = (id, email, phone, address, count, name, price) => dispatch => {
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4
    axios.post('/api/transactions', {
      id,
      email,
      phone,
      address,
<<<<<<< HEAD
      carts
=======
      count,
      name,
      price
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4
    })
      .then(res => {
        dispatch({
          type: USER_CHECKOUT,
          payload: res.data
        })
      })
  };

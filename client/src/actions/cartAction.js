import axios from 'axios';
import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, USER_CHECKOUT } from './types';

export const getCart = () =>  {
  return {
    type: GET_CART
  }
}

// addToCart
export const addToCart = (id, bookId, count, name, price, bookImage, author, rating) => (
  {
    type: ADD_TO_CART,
    id,
    bookId,
    count,
    name,
    price,
    author,
    bookImage,
    rating
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
export const updateCart = (cate, id) => (
  {
    type: UPDATE_CART_ITEM,
    cate,
    id,
  }
);

// checkoutCartItem
export const userCheckout = (id, email, phone, address, carts) => dispatch => {
    axios.post('/api/transactions', {
      id,
      email,
      phone,
      address,
      carts
    })
      .then(res => {
        dispatch({
          type: USER_CHECKOUT,
          payload: res.data
        })
      })
  };

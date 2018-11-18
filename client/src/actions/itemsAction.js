import axios from 'axios';
import { SET_LOADING, TOGGLE_LOGIN, TOGGLE_FORGET, GET_BOOKS, GET_BOOK, GET_CATE } from './types';

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGIN
  }
}

export const toggleForget = () => {
  return {
    type: TOGGLE_FORGET
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const getBooks = () => dispatch => {
  dispatch(setLoading());
  axios.get('/api/books')
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
};

export const getBook = (id) => dispatch => {
  axios.get(`/api/books/detail/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_BOOK,
        payload: res.data
      })
    }
    )
};

export const getCate = () => dispatch => {
  dispatch(setLoading());
  axios.get('/api/books/cate')
    .then(res =>
      dispatch({
        type: GET_CATE,
        payload: res.data
      })
    )
};

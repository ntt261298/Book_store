import axios from 'axios';
import { SET_LOADING, TOGGLE_LOGIN, GET_BOOKS} from './types';

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGIN
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

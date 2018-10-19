import axios from 'axios';
import { SEARCH_BOOK } from './types';

export const getSearchResults = val => dispatch => {
  axios.get(`/api/search?book=${val}`)
    .then(res =>
      dispatch({
        type: SEARCH_BOOK,
        payload: res.data
      })
    )
}

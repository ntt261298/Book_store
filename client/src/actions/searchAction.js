import axios from 'axios';
import { SEARCH_BOOK, SEARCH_CATE } from './types';

export const getSearchResults = (type, val) => dispatch => {
  axios.get(`/api/search?type=${type}&book=${val}`)
    .then(res =>
      dispatch({
        type: SEARCH_BOOK,
        payload: res.data
      })
    )
}

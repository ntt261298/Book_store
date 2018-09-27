import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  item: itemsReducer,
  book: booksReducer,
  cart: cartReducer
})

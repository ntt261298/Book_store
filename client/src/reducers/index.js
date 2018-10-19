import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import accountsReducer from './accountsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  item: itemsReducer,
  book: booksReducer,
  cart: cartReducer,
  account: accountsReducer,
  search: searchReducer
})

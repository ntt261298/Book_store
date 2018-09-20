import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SET_LOADING, TOGGLE_LOGIN } from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  modal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        modal: !state.modal
      }
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

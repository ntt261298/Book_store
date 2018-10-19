import { SET_LOADING, TOGGLE_LOGIN } from '../actions/types';

const initialState = {
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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

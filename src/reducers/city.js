import { SET_CITY } from '../actions';

const initialState = {
  city: '',
};

const State = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default State;

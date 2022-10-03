import { 
  LOGIN,
  SET_MODAL_STATUS,
  SIGNIN_BY_TOKEN_ADMIN,
  RELOAD
} from '../actions';

const initialState = {
  logged: false,
  modal: false,
  reload: false,
};

const Tennis = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: action.payload,
      };
    case SIGNIN_BY_TOKEN_ADMIN:
      return {
        ...state,
        logged: true,
      };
      case SET_MODAL_STATUS:
        return {
          ...state,
          modal: action.payload
        }
        case RELOAD: {
          return {
            ...state,
            reload: action.payload,
          };
        }
    default:
      return state;
  }
};

export default Tennis;

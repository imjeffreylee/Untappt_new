import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };

    case LOGOUT_USER:
      return _nullUser;
      
    default:
      return state;
  }
};

export default sessionReducer;
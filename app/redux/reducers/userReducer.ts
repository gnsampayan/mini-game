import { SET_USER_CURRENT_X, SET_CHARACTER_CURRENT_X } from '../actions/userActions';

const initialState = {
  userCurrentX: 0,
  characterCurrentX: 0, // Initial value
};

const userReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_USER_CURRENT_X:
      return {
        ...state,
        userCurrentX: action.payload,
      };
    case SET_CHARACTER_CURRENT_X:
      return {
        ...state,
        characterCurrentX: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

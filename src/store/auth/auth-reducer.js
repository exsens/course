import { SET_AUTH_DATA, RESET_AUTH_DATA } from "./auth-action.js";

const initialState = {
  userId: null,
  email: null,
  isAuth: false,
}

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_AUTH_DATA: 
      return {
        ...state ,
        ...payload,
      }

    case RESET_AUTH_DATA: 
      return initialState;

    default:
      return state;
  }
}
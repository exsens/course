import { SET_AUTH_DATA, RESET_AUTH_DATA, SET_CAPTCHA_URL } from "./auth-action.js";

const initialState = {
  userId: null,
  email: null,
  isAuth: false,
  captchaUrl: '',
}

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_AUTH_DATA: 
      return {
        ...state ,
        ...payload,
      }

    case SET_CAPTCHA_URL: 
      return {
        ...state,
        captchaUrl: payload,
      }
    case RESET_AUTH_DATA: 
      return initialState;

    default:
      return state;
  }
}
import { AuthAction, AuthActionType } from "../types/auth";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  isAuth: false,
  login: null as string | null,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: AuthAction
): InitialStateType => {
  switch (action.type) {
    case AuthActionType.SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case AuthActionType.SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload,
      };
    case AuthActionType.RESET_AUTH_DATA:
      return initialState;

    default:
      return state;
  }
};

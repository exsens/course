import { SET_AUTH_DATA, RESET_AUTH_DATA, SET_CAPTCHA_URL } from "./auth-action";

export type InitialState = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | false;
  captchaUrl: string | "";
};

const initialState: InitialState = {
  userId: null,
  email: null,
  isAuth: false,
  login: "",
  captchaUrl: "",
};

export const authReducer = (
  state = initialState,
  { type, payload }: any
): InitialState => {
  switch (type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...payload,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: payload,
      };
    case RESET_AUTH_DATA:
      return initialState;

    default:
      return state;
  }
};

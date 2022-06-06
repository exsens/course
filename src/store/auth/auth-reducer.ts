import { SET_AUTH_DATA, RESET_AUTH_DATA, SET_CAPTCHA_URL } from "./auth-action";


// export type InitialState = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean | false;
//   captchaUrl: string | "";
// };

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  isAuth: false,
  login: null as string | null,
  captchaUrl: null as string | null,
};

export type InitialState = typeof initialState;

// type Actions = {
//   type: typeof SET_AUTH_DATA | typeof SET_CAPTCHA_URL | typeof RESET_AUTH_DATA,
//   payload: AuthData | string
// }

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

import * as actions from '../auth/auth-action';

export enum AuthActionType {
  SET_AUTH_DATA = "auth/SET_AUTH_DATA",
  RESET_AUTH_DATA = "auth/RESET_AUTH_DATA",
  SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL",
}

export type AuthData = {
  userId: number;
  email: string;
  login: string;
  isAuth: boolean;
};

type ActionReturnType<T> = T extends {[key: string]: (...args: any[]) => infer R} ? R : never;
export type AuthAction = ActionReturnType<typeof actions>;













// export type InitialState = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean | false;
//   captchaUrl: string | "";
// };
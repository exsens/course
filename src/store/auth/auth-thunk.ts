import { stopSubmit } from "redux-form";

import { authApi } from "../../api/api";

import { ThunkType } from "../types/common";
import { resetAuthData, setAuthData, setCaptchaUrl } from "./auth-action";

export const getAuth = (): ThunkType => async (dispatch) => {
  try {
    const { data } = await authApi.getAuthMe();
    if (data.resultCode === 0) {
      dispatch(setAuthData(data.data.id, data.data.email, data.data.login));
    }
  } catch (error) {
    console.error(error);
  }
};

export const logIn =
  (
    email: string,
    password: string,
    rememberMe = false,
    captcha?: string
  ): ThunkType =>
  async (dispatch) => {
    try {
      const { data } = await authApi.getAuthLogin({
        email,
        password,
        rememberMe,
        captcha,
      });
      if (data.resultCode === 0) {
        dispatch(getAuth());
      } else if (data.resultCode === 10) {
        const {
          data: { messages = "send captcha", url },
        } = await authApi.getCaptcha();
        dispatch(setCaptchaUrl(url));
        dispatch(stopSubmit("login", { _error: messages }));
      } else {
        let messages = data.messages.length ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: messages }));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const logOut =
  (): ThunkType =>
  async (dispatch: Function, _: any, { client, api }: any) => {
    try {
      const {
        data: { resultCode },
      } = await client.delete(api.getAuthLogin(), {
        withCredentials: true,
        headers: {
          "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
        },
      });

      if (!resultCode) {
        dispatch(resetAuthData());
      }
    } catch (error) {
      console.error(error);
    }
  };

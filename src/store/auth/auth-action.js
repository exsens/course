import { stopSubmit } from "redux-form";

export const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
export const RESET_AUTH_DATA = "auth/RESET_AUTH_DATA";
export const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

const setAuthData = ({ id: userId, email, login, isAuth = true }) => {
  return {
    type: SET_AUTH_DATA,
    payload: { userId, email, login, isAuth },
  };
};

const resetAuthData = () => {
  return {
    type: RESET_AUTH_DATA,
  };
};

const setCaptchaUrl = (url) => {
  return {
    type: SET_CAPTCHA_URL,
    payload: url,
  };
};

//           thunk

export const getAuth =
  () =>
  async (dispatch, _, { client, api }) => {
    try {
      const request = await client.get(api.getAuthMe(), {
        withCredentials: true,
      });
      if (request.data.resultCode === 0) {
        dispatch(setAuthData({ ...request.data.data }));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const logIn =
  (email, password, rememberMe = false, captcha) =>
  async (dispatch, _, { client, api }) => {
    try {
      const { data } = await client.post(
        api.getAuthLogin(),
        {
          email,
          password,
          rememberMe,
          captcha,
        },
        {
          withCredentials: true,
          headers: {
            "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
          },
        }
      );
      if (data.resultCode === 0) {
        dispatch(getAuth());
      } else if (data.resultCode === 10) {
        const {
          data: { messages = "send captcha", url },
        } = await client.get(api.getCaptcha());
        dispatch(setCaptchaUrl(url))
        dispatch(stopSubmit("login", { _error:  messages  }));
      } else {
        let messages = data.messages.length ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error:  messages  }));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const logOut =
  () =>
  async (dispatch, _, { client, api }) => {
    try {
      const {
        data: { resultCode, messages },
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

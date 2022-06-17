import { AuthActionType } from '../types/auth'

export const setAuthData = (userId: number, email: string, login: string, isAuth = true) =>
  ({
    type: AuthActionType.SET_AUTH_DATA,
    payload: { userId, email, login, isAuth },
  } as const)

export const resetAuthData = () =>
  ({
    type: AuthActionType.RESET_AUTH_DATA,
  } as const)

export const setCaptchaUrl = (url: string) =>
  ({
    type: AuthActionType.SET_CAPTCHA_URL,
    payload: url,
  } as const)

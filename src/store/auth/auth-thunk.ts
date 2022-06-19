// import { stopSubmit } from 'redux-form'
import { authApi } from '../../api/api'
import { ResultCodeForCaptcha, ResultCodes } from '../../api/types'
import { ThunkType } from '../types/common'
import { resetAuthData, setAuthData, setCaptchaUrl } from './auth-action'

export const getAuth = (): ThunkType => async (dispatch) => {
  try {
    const {
      resultCode,
      data: { id, email, login },
    } = await authApi.getMyAuth()
    if (resultCode === ResultCodes.Success) {
      dispatch(setAuthData(id, email, login))
    }
  } catch (error) {
    console.error(error)
  }
}

export const logIn =
  (email: string, password: string, rememberMe = false, captcha?: string): ThunkType =>
  async (dispatch) => {
    try {
      const { resultCode, messages } = await authApi.toggleLogin({
        email,
        password,
        rememberMe,
        captcha,
      })
      if (resultCode === ResultCodes.Success) {
        dispatch(getAuth())
      } else if (resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        const { url } = await authApi.getCaptcha()
        dispatch(setCaptchaUrl(url))
        // dispatch(stopSubmit('login', { _error: 'Send Captcha' }))
      } else {
        const messageError = messages?.length ? messages[0] : 'Some error'
        // dispatch(stopSubmit('login', { _error: messageError }))
      }
    } catch (error) {
      console.log(error)
    }
  }

export const logOut = (): ThunkType => async (dispatch) => {
  try {
    const { resultCode } = await authApi.toggleLogin()

    if (resultCode === ResultCodes.Success) {
      dispatch(resetAuthData())
    }
  } catch (error) {
    console.error(error)
  }
}

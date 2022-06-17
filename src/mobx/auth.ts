import { makeAutoObservable } from 'mobx'
import { authApi } from '../api/api'
import { ResultCodeForCaptcha, ResultCodes } from '../api/types'

class Auth {
  userId = null as number | null
  email = ''
  isAuth = false
  login = ''
  captchaUrl = ''
  error? = null as string[] | null

  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  setAuthData(userId: number, email: string, login: string, isAuth = true) {
    this.userId = userId
    this.email = email
    this.login = login
    this.isAuth = isAuth
  }

  setCaptchaUrl(captchaUrl: string) {
    this.captchaUrl = captchaUrl
  }

  getAuth = async () => {
    try {
      const {
        resultCode,
        data: { id, email, login },
      } = await authApi.getMyAuth()
      if (resultCode === ResultCodes.Success) {
        this.setAuthData(id, email, login, true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  resetAuthData() {
    this.userId = null
    this.email = ''
    this.isAuth = false
    this.login = ''
    this.captchaUrl = ''
  }

  logIn = async (email: string, password: string, rememberMe: boolean, captcha: string) => {
    try {
      const { resultCode, messages } = await authApi.toggleLogin({
        email,
        password,
        rememberMe,
        captcha,
      })
      if (resultCode === ResultCodes.Success) {
        this.getAuth()
      } else if (resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        const { url } = await authApi.getCaptcha()
        this.setCaptchaUrl(url)
      } else {
        this.error = messages
      }
    } catch (error) {
      console.error(error)
    }
  }

  logOut = async () => {
    try {
      const { resultCode } = await authApi.toggleLogin()

      if (resultCode === ResultCodes.Success) {
        this.resetAuthData()
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Auth()

import axios, { AxiosResponse } from 'axios'
import { AuthFormData } from '../store/types/auth'
import { ProfileFormData, ProfileInfo } from '../store/types/profile'
import { ApiTypes, AuthMe, CaptchaResponseType, getUserData, ProfileAvatar } from './types'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  timeout: 3000,
  headers: { 'API-KEY': process.env.API_KEY as string },
  withCredentials: true,
})

function _transformAxiosData<T>(data: AxiosResponse<T>): T {
  return data.data
}

export const authApi = {
  getMyAuth: () => instance.get<AuthMe>(`auth/me`).then(_transformAxiosData),
  toggleLogin: (authdata?: AuthFormData) =>
    authdata
      ? instance.post<ApiTypes>(`auth/login`, authdata).then(_transformAxiosData)
      : instance.delete<ApiTypes>(`auth/login`).then(_transformAxiosData),
  getCaptcha: () => instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(_transformAxiosData),
}

export const usersApi = {
  getUsersPage: (page: number, count: number) =>
    instance.get<getUserData>(`users?page=${page}&count=${count}`).then(_transformAxiosData),
  followUser: (id: number, followed: boolean) =>
    followed
      ? instance.delete<ApiTypes>(`follow/${id}`).then(_transformAxiosData)
      : instance.post<ApiTypes>(`follow/${id}`, id).then(_transformAxiosData),
}

export const profileApi = {
  getProfileById(id: number) {
    return instance.get<ProfileInfo>(`profile/${id}`)
  },
  getProfileStatusById(id: number) {
    return instance.get<string>(`profile/status/${id}`)
  },
  async updateUserStatus(status: string) {
    const data = await instance.put<ApiTypes>(`profile/status`, { status })
    return _transformAxiosData(data)
  },
  async updateProfileInfo(formData: ProfileFormData) {
    const data = await instance.put<ApiTypes>(`profile`, formData)
    return _transformAxiosData(data)
  },
  async setAvatar(img: any) {
    const newImg = new FormData()
    newImg.append('image', img)
    const data = await instance.post<ProfileAvatar>(`profile/photo`, newImg, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return _transformAxiosData(data)
  },
}

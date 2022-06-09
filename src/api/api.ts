import axios, { AxiosResponse } from "axios";
import { AuthFormData } from "../store/types/auth";
import { ProfileFormData } from "../store/types/profile";
import { ApiTypes, AuthMe, CaptchaResponseType, getUserData } from "./types";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 1000,
  headers: { "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc" },
  withCredentials: true,
});

function _transformAxiosData<T>(data: AxiosResponse<T>): T {
  return data.data;
}

export const authApi = {
  getMyAuth: () => instance.get<AuthMe>(`auth/me`).then(_transformAxiosData),
  toggleLogin: (authdata?: AuthFormData) =>
    authdata
      ? instance
          .post<ApiTypes>(`auth/login`, authdata)
          .then(_transformAxiosData)
      : instance.delete<ApiTypes>(`auth/login`).then(_transformAxiosData),
  getCaptcha: () =>
    instance
      .get<CaptchaResponseType>(`security/get-captcha-url`)
      .then(_transformAxiosData),
};

export const usersApi = {
  getUsersPage: (page: number, count: number) =>
    instance
      .get<getUserData>(`users?page=${page}&count=${count}`)
      .then(_transformAxiosData),
  followUser: (id: number, followed: boolean) =>
    followed
      ? instance.delete<ApiTypes>(`follow/${id}`).then(_transformAxiosData)
      : instance.post<ApiTypes>(`follow/${id}`, id).then(_transformAxiosData),
};

export const profileApi = {
  getProfileById(id: number) {
    return instance.get(`profile/${id}`);
  },
  getProfileStatusById(id: number) {
    return instance.get(`profile/status/${id}`);
  },
  updateUserStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
  updateProfileInfo(formData: ProfileFormData) {
    return instance.put(`profile`, formData);
  },
  setAvatar(img: any) {
    const newImg = new FormData();
    newImg.append("image", img);
    return instance.post(`profile/photo`, newImg, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

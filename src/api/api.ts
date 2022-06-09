import axios from "axios";
import { AuthFormData } from '../store/types/auth';
import { ProfileFormData } from '../store/types/profile';

const instance: any = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 1000,
  headers: { "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc" },
  withCredentials: true,
});

export const authApi = {
  getMyAuth: () =>  instance.get(`auth/me`),
  toggleLogin: (method: string, authdata?: AuthFormData) => instance[method](`auth/login`, authdata),
  getCaptcha: () => instance.get(`security/get-captcha-url`)
};

export const usersApi = {
  getUsersPage: (page: number, count: number) => instance.get(`users?page=${page}&count=${count}`),
  followUser: (id:number, method: string) =>{
    return instance[method](`follow/${id}`)
  }, 
};

export const profileApi = {
  getProfileById(id:number) {
    return instance.get(`profile/${id}`);
  },
  getProfileStatusById(id:number) {
    return instance.get(`profile/status/${id}`);
  },
  updateUserStatus(status:string) {
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

import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 1000,
  headers: { "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc" },
  withCredentials: true,
});

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

export const getAuthMe = () => `${BASE_URL}auth/me`;
export const getAuthLogin = () => `${BASE_URL}auth/login`;

export const getCaptcha = () => `${BASE_URL}security/get-captcha-url`;

export const followUser = (id) => `${BASE_URL}follow/${id}`;

export const authApi = {
  getAuthMe: () =>  instance.get(`auth/me`),
  getAuthLogin: () => instance.get(`auth/login`),
  getCaptcha: () => instance.get(`security/get-captcha-url`)
};

export const usersApi = {
  getUsersPage: (page, count) => instance.get(`users?page=${page}&count=${count}`),
  followUser: (id, method) =>{
    console.log(method)
    return instance[`${method}`](`follow/${id}`)
  }, 
};

export const profileApi = {
  getProfileById(id) {
    return instance.get(`${BASE_URL}profile/${id}`);
  },
  getProfileStatusById(id) {
    return instance.get(`${BASE_URL}profile/status/${id}`);
  },
  updateUserStatus(status) {
    return instance.put(`${BASE_URL}profile/status`, { status });
  },
  updateProfileInfo(formData) {
    return instance.put(`${BASE_URL}profile`, formData);
  },
  setAvatar(img) {
    const newImg = new FormData();
    newImg.append("image", img);
    return instance.post(`${BASE_URL}profile/photo`, newImg, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

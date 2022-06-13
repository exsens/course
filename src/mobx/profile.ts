import { makeAutoObservable } from "mobx";

import { profileApi } from "../api/api";
import auth from "./auth";

import { ProfileInfo, Photos, ProfileFormData } from "../store/types/profile";
import { Nullable } from "../store/types/common";
import { ResultCodes } from "../api/types";

class Profile {
  profileInfo = {
    fullName: "",
    status: "",
    userId: null as Nullable<number>,
    lookingForAJob: false,
    lookingForAJobDescription: null as Nullable<string>,
    contacts: {
      github: null as Nullable<String>,
      vk: null as Nullable<String>,
      facebook: null as Nullable<String>,
      instagram: null as Nullable<String>,
      twitter: null as Nullable<String>,
      website: null as Nullable<String>,
      youtube: null as Nullable<String>,
      mainLink: null as Nullable<String>,
    },
    photos: {
      small: null as Nullable<String>,
      large: null as Nullable<String>,
    },
  };

  posts = [
    {
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "lor sit amet",
    },
    {
      text: "ipsum dolor",
    },
  ];
  status = "";

  constructor() {
    makeAutoObservable(this);
  }

  addPost(post: string) {
    this.posts.push({ text: post });
  }

  setProfile(data: ProfileInfo) {
    this.profileInfo = {...this.profileInfo, ...data};
    this.status = "fulfilled";
  }

  setLoading() {
    this.status = "loading";
  }

  setStatus(status: string) {
    this.profileInfo.status = status;
    this.status = "fulfilled";
  }

  setAvatar(imgSrc: Photos) {
    this.profileInfo.photos = imgSrc;
  }

  loadProfile = async (id: number) => {
    try {
      this.setLoading();
      const { status, data } = await profileApi.getProfileById(id);
      if (status === 200) {
        this.setProfile(data);
      }
    } catch (error) {}
  };

  getStatus = async (id: number) => {
    try {
      this.setLoading();
      const { data, status } = await profileApi.getProfileStatusById(id);
      if (status === 200) {
        this.setStatus(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  updateStatus = async (status: string) => {
    try {
      const { resultCode } = await profileApi.updateUserStatus(status);
      if (resultCode === ResultCodes.Success) {
        this.setStatus(status);
      } else if (resultCode === ResultCodes.Error) {
        status = status.slice(0, 50);
        this.setStatus(status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  loadUserAvatar = async (img: any) => {
    const { data, resultCode } = await profileApi.setAvatar(img);
    try {
      if (resultCode === ResultCodes.Success) {
        this.setAvatar(data.photos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateProfileInfo = async (formData: ProfileFormData) => {
    const userId = auth.userId as number;
    const { resultCode } = await profileApi.updateProfileInfo(formData);
    try {
      if (resultCode === ResultCodes.Success) {
        this.loadProfile(userId);
      } else {
        console.error(resultCode);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Profile();

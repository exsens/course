import { ResultCodes } from "../../api/types";
import { ProfileFormData } from "../types/profile";
import { ThunkType } from "../types/common";

import { profileApi } from "../../api/api";
import { setAvatar, setLoading, setProfile, setStatus } from "./profile-action";

export const loadProfile =
  (id: number): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const { status, data } = await profileApi.getProfileById(id);
      if (status === 200) {
        return dispatch(setProfile(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getStatus =
  (id: number): ThunkType =>
  async (dispatch) => {
    try {
      const { data, status } = await profileApi.getProfileStatusById(id);
      if (status === 200) {
        dispatch(setStatus(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      const { resultCode } = await profileApi.updateUserStatus(status);
      if (resultCode === ResultCodes.Success) {
        dispatch(setStatus(status));
      } else if (resultCode === ResultCodes.Error) {
        status = status.slice(0, 50);
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const loadUserAvatar =
  (img: any): ThunkType =>
  async (dispatch) => {
    const { data, resultCode } = await profileApi.setAvatar(img);
    try {
      if (resultCode === ResultCodes.Success) {
        dispatch(setAvatar(data.photos));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const updateProfileInfo =
  (formData: ProfileFormData): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId as number;
    const { resultCode } = await profileApi.updateProfileInfo(formData);
    try {
      if (resultCode === ResultCodes.Success) {
        dispatch(loadProfile(userId));
      } else {
        console.error(resultCode);
      }
    } catch (error) {
      console.error(error);
    }
  };

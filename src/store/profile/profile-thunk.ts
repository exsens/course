import { profileApi } from "../../api/api";
import { ProfileInfo } from "../types/profile";
import { ThunkType } from "../types/common";
import { setAvatar, setLoading, setProfile, setStatus } from "./profile-action";

export const loadProfile =
  (id: number): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const request = await profileApi.getProfileById(id);
      if (request.status === 200) {
        return dispatch(setProfile(request.data));
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
      const { data } = await profileApi.updateUserStatus(status);
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      } else if (data.resultCode === 1) {
        status = status.slice(0, 50);
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const loadUserAvatar =
  (img: object): ThunkType =>
  async (dispatch) => {
    const { data } = await profileApi.setAvatar(img);
    try {
      if (data.resultCode === 0) {
        dispatch(setAvatar(data.data.photos));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const updateProfileInfo =
  (formData: ProfileInfo): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId as number;
    const { data } = await profileApi.updateProfileInfo(formData);
    try {
      if (data.resultCode === 0) {
        dispatch(loadProfile(userId));
      } else {
        console.error(data.resultCode);
      }
    } catch (error) {
      console.error(error);
    }
  };

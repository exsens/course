import { profileApi } from "../../api/config";
import { ProfileActionType, ProfileActions, ProfileInfo, Photos, ThunkType } from "../types/profile";

export const addPost = (text: string)  => ({
  type: ProfileActionType.ADD_POST,
  payload: text,
} as const);

type AddPostType = ReturnType<typeof addPost>

const setProfile = (data: ProfileInfo): ProfileActions => ({
  type: ProfileActionType.SET_PROFILE,
  payload: data,
});

const setLoading = (): ProfileActions => ({
  type: ProfileActionType.SET_LOADING,
});

const setStatus = (text: string): ProfileActions => ({
  type: ProfileActionType.SET_STATUS,
  payload: text,
});

const setAvatar = (img: Photos): ProfileActions => ({
  type: ProfileActionType.SET_AVATAR,
  payload: img,
});

// thunk

export const loadProfile = (id: number):ThunkType => async (dispatch) => {
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

export const getStatus = (id: number) => async (dispatch: Function) => {
  try {
    const { data, status } = await profileApi.getProfileStatusById(id);
    if (status === 200) {
      dispatch(setStatus(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateStatus = (status: string) => async (dispatch: Function) => {
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

export const loadUserAvatar = (img: any) => async (dispatch: Function) => {
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
  (formData: ProfileInfo) => async (dispatch: Function, getState: any) => {
    const userId = getState().auth.userId;
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

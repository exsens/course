import { Photos, ProfileActionType, ProfileInfo } from '../types/profile'

export const addPost = (text: string) =>
  ({
    type: ProfileActionType.ADD_POST,
    payload: text,
  } as const)

export const setProfile = (data: ProfileInfo) =>
  ({
    type: ProfileActionType.SET_PROFILE,
    payload: data,
  } as const)

export const setLoading = () =>
  ({
    type: ProfileActionType.SET_LOADING,
  } as const)

export const setStatus = (text: string) =>
  ({
    type: ProfileActionType.SET_STATUS,
    payload: text,
  } as const)

export const setAvatar = (img: Photos) =>
  ({
    type: ProfileActionType.SET_AVATAR,
    payload: img,
  } as const)

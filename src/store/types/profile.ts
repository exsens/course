import { ThunkAction } from 'redux-thunk'
import { RootState } from '../types/store';

export type ThunkType = ThunkAction<void, RootState, unknown, ProfileActions>
// export const getThunkType = (Actions) => ThunkAction<void, RootState, unknown, ProfileActions>

export enum ProfileActionType {
  ADD_POST = "profile/ADD_POST",
  UPDATE_NEW_POST = "profile/UPDATE_NEW_POST",
  SET_PROFILE = "profile/SET_PROFILE",
  SET_LOADING = "profile/SET_LOADING",
  SET_STATUS = "profile/SET_STATUS",
  SET_AVATAR = "profile/SET_AVATAR",
}

// export interface InitialState {
//   profileInfo: ProfileInfo | {};
//   posts: Posts[];
//   status: string | null;
// }

export interface ProfileInfo {
  id: number;
  fullName: string;
  status: string;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  contacts: Contacts;
  photos: Photos;
}

export interface Photos {
  small: string | null;
  large: string | null;
}

export type ProfileActions =
  | Addpost
  | SetProfile
  | SetLoading
  | SetStatus
  | SetAvatar;

interface Contacts {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
}

export interface Posts {
  text: string;
}

interface Addpost {
  type: typeof ProfileActionType.ADD_POST;
  payload: string;
}

interface SetProfile {
  type: typeof ProfileActionType.SET_PROFILE;
  payload: ProfileInfo;
}

interface SetLoading {
  type: typeof ProfileActionType.SET_LOADING;
  payload?: null;
}

interface SetStatus {
  type: typeof ProfileActionType.SET_STATUS;
  payload: string;
}

interface SetAvatar {
  type: typeof ProfileActionType.SET_AVATAR;
  payload: Photos;
}

import * as actions from '../profile/profile-action'

export enum ProfileActionType {
  ADD_POST = 'profile/ADD_POST',
  UPDATE_NEW_POST = 'profile/UPDATE_NEW_POST',
  SET_PROFILE = 'profile/SET_PROFILE',
  SET_LOADING = 'profile/SET_LOADING',
  SET_STATUS = 'profile/SET_STATUS',
  SET_AVATAR = 'profile/SET_AVATAR',
}

type ActionReturnType<T> = T extends { [key: string]: (...args: any[]) => infer R } ? R : never
export type ProfileAction = ActionReturnType<typeof actions>

export interface ProfileInfo {
  fullName: string
  status: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  contacts: Contacts
  photos: Photos
}

export interface ProfileFormData {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: Contacts
}

export interface Photos {
  small: string | null
  large: string | null
}

interface Contacts {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null
}

export interface Posts {
  text: string
}

// export interface InitialState {
//   profileInfo: ProfileInfo | {};
//   posts: Posts[];
//   status: string | null;
// }

// export type ProfileActions =
//   | Addpost
//   | SetProfile
//   | SetLoading
//   | SetStatus
//   | SetAvatar;

// interface Addpost {
//   type: typeof ProfileActionType.ADD_POST;
//   payload: string;
// }

// interface SetProfile {
//   type: typeof ProfileActionType.SET_PROFILE;
//   payload: ProfileInfo;
// }

// interface SetLoading {
//   type: typeof ProfileActionType.SET_LOADING;
//   payload?: null;
// }

// interface SetStatus {
//   type: typeof ProfileActionType.SET_STATUS;
//   payload: string;
// }

// interface SetAvatar {
//   type: typeof ProfileActionType.SET_AVATAR;
//   payload: Photos;
// }

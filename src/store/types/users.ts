import { Photos } from '../profile/profile-reducer'

export enum UserActionType {
  SET_USERS = "users/SET_USERS",
  SET_TOTAL_USERS = "users/SET_TOTAL_USERS",
  SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE",
  SET_LOADING = "users/SET_LOADING",
  TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW",
  TOGGLE_FOLLOW_PROGRESS = "users/TOGGLE_FOLLOW_PROGRESS",
};

export type Users = {
  name: string | null;
  id: number | null;
  uniqueUrlName?: string | null;
  photos: Photos;
  status: string | null;
  followed: boolean;
};

export type UserAction =
  | ToggleFollow
  | SetUsers
  | SetTotalUsers
  | SelectUserPage
  | SetLoading
  | ToggleFollowingProgress;

export interface InitialState {
  users: Users[] | [];
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  status: string | null;
  followingInProgress: number[] | [];
}

interface ToggleFollow {
  type: UserActionType.TOGGLE_FOLLOW;
  payload: number;
}

interface SetUsers {
  type: UserActionType.SET_USERS;
  payload: Users[];
}

interface SetTotalUsers {
  type: UserActionType.SET_TOTAL_USERS;
  payload: number;
}

interface SelectUserPage {
  type: UserActionType.SET_CURRENT_PAGE;
  payload: number;
}

interface SetLoading {
  type: UserActionType.SET_LOADING;
  payload?: null;
}

interface ToggleFollowingProgress {
  type: UserActionType.TOGGLE_FOLLOW_PROGRESS;
  payload: number;
}

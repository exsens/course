import { Users, UserActionType } from "../types/users";

export const toggleFollow = (id: number) =>
  ({
    type: UserActionType.TOGGLE_FOLLOW,
    payload: id,
  } as const);

export const setUsers = (data: Users[]) =>
  ({
    type: UserActionType.SET_USERS,
    payload: data,
  } as const);

export const setTotalUsers = (count: number) =>
  ({
    type: UserActionType.SET_TOTAL_USERS,
    payload: count,
  } as const);

export const selectUserPage = (page: number) =>
  ({
    type: UserActionType.SET_CURRENT_PAGE,
    payload: page,
  } as const);

export const setLoading = () =>
  ({
    type: UserActionType.SET_LOADING,
  } as const);

export const toggleFollowingProgress = (id: number) =>
  ({
    type: UserActionType.TOGGLE_FOLLOW_PROGRESS,
    payload: id,
  } as const);


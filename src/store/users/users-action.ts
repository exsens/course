import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Users, UserAction, UserActionType } from "../types/users";
import { RootState } from "../redux-store";
import { Extra } from "../redux-store";
import { usersApi } from "../../api/config";

export const toggleFollow = (id: number): UserAction => {
  return {
    type: UserActionType.TOGGLE_FOLLOW,
    payload: id,
  };
};

export const setUsers = (data: Users[]): UserAction => {
  return {
    type: UserActionType.SET_USERS,
    payload: data,
  };
};

export const setTotalUsers = (data: number): UserAction => {
  return {
    type: UserActionType.SET_TOTAL_USERS,
    payload: data,
  };
};

export const selectUserPage = (page: number): UserAction => {
  return {
    type: UserActionType.SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setLoading = (): UserAction => {
  return {
    type: UserActionType.SET_LOADING,
  };
};

export const toggleFollowingProgress = (id: number): UserAction => {
  return {
    type: UserActionType.TOGGLE_FOLLOW_PROGRESS,
    payload: id,
  };
};

// thunk

export const followUser =
  (id: number) =>
  async (dispatch: any, _: any, { client, api }: any) => {
    try {
      dispatch(setLoading());
      const request = await client.delete(api.followUser(id), {
        withCredentials: true,
        headers: {
          "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
        },
      });
      if (request.data.resultCode === 0) {
        dispatch(toggleFollow(id));
        dispatch(toggleFollowingProgress(id));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const unFollowUser =
  (id: number) =>
  async (dispatch: any, _: any, { client, api }: any) => {
    try {
      dispatch(setLoading());
      const request = await client.post(
        api.followUser(id),
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
          },
        }
      );
      if (request.data.resultCode === 0) {
        dispatch(toggleFollow(id));
        dispatch(toggleFollowingProgress(id));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const loadUsers =
  (currentPage: number, pageSize: number): any =>
  async (
    dispatch: Dispatch<UserAction>,
    _: RootState,
  ) => {
    try {
      dispatch(setLoading());
      const {data} = await usersApi.getUsersPage(currentPage, pageSize);
      if (!data.error) {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
      }
    } catch (error) {
      console.error(error);
    }
  };

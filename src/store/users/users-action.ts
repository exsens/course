import { Users } from "./users-reducer";

export const SET_USERS = "users/SET_USERS";
export const SET_TOTAL_USERS = "users/SET_TOTAL_USERS";
export const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
export const SET_LOADING = "users/SET_LOADING";
export const TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW";
export const TOGGLE_FOLLOW_PROGRESS = "users/TOGGLE_FOLLOW_PROGRESS";

type ToggleFollow = {
  type: typeof TOGGLE_FOLLOW;
  payload: number;
};

type SetUsers = {
  type: typeof SET_USERS;
  payload: Users;
};

type SetTotalUsers = {
  type: typeof SET_TOTAL_USERS;
  payload: number;
};

type SelectUserPage = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

type SetLoading = {
  type: typeof SET_LOADING;
};

type ToggleFollowingProgress = {
  type: typeof TOGGLE_FOLLOW_PROGRESS;
  payload: number;
};
export const toggleFollow = (id: number): ToggleFollow => {
  return {
    type: TOGGLE_FOLLOW,
    payload: id,
  };
};

export const setUsers = (data: Users): SetUsers => {
  return {
    type: SET_USERS,
    payload: data,
  };
};

export const setTotalUsers = (data: number): SetTotalUsers => {
  return {
    type: SET_TOTAL_USERS,
    payload: data,
  };
};

export const selectUserPage = (page: number): SelectUserPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setLoading = (): SetLoading => {
  return {
    type: SET_LOADING,
  };
};

export const toggleFollowingProgress = (
  id: number
): ToggleFollowingProgress => {
  return {
    type: TOGGLE_FOLLOW_PROGRESS,
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
  (currentPage: number, pageSize: number) =>
  async (dispatch: any, _: any, { client, api }: any) => {
    try {
      dispatch(setLoading());

      const data = await client.get(api.getUsersPage(currentPage, pageSize), {
        withCredentials: true,
      });
      dispatch(setUsers(data.data.items));
      dispatch(setTotalUsers(data.data.totalCount));
    } catch (error) {
      console.error(error);
    }
  };

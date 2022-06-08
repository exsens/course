import { ThunkType } from "../types/common";
import {
  setLoading,
  setTotalUsers,
  setUsers,
  toggleFollow,
  toggleFollowingProgress,
} from "./users-action";
import { usersApi } from "../../api/api";

export const toggleFollowUser =
  (id: number, followed: boolean): ThunkType =>
  async (dispatch) => {
    try {
      console.log(followed, 'thunk')
      dispatch(setLoading());
      const { data } = followed
        ? await usersApi.followUser(id, "delete")
        : await usersApi.followUser(id, "post");

      if (data.resultCode === 0) {
        dispatch(toggleFollow(id));
        dispatch(toggleFollowingProgress(id));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const loadUsers =
  (currentPage: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await usersApi.getUsersPage(currentPage, pageSize);
      if (!data.error) {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
      }
    } catch (error) {
      console.error(error);
    }
  };

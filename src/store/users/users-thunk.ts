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
      dispatch(setLoading());
      const { data } = followed
        ? await usersApi.followUser(id, followed)
        : await usersApi.followUser(id, followed);

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
      const { error, items, totalCount } = await usersApi.getUsersPage(currentPage, pageSize);
      if (!error) {
        dispatch(setUsers(items));
        dispatch(setTotalUsers(totalCount));
      }
    } catch (error) {
      console.error(error);
    }
  };

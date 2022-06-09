import { ThunkType } from "../types/common";
import { ResultCodes } from "../../api/types";

import { usersApi } from "../../api/api";

import {
  setLoading,
  setTotalUsers,
  setUsers,
  toggleFollow,
  toggleFollowingProgress,
} from "./users-action";

export const toggleFollowUser =
  (id: number, followed: boolean): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const { resultCode } = await usersApi.followUser(id, followed);

      if (resultCode === ResultCodes.Success) {
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
      const { error, items, totalCount } = await usersApi.getUsersPage(
        currentPage,
        pageSize
      );
      if (!error) {
        dispatch(setUsers(items));
        dispatch(setTotalUsers(totalCount));
      }
    } catch (error) {
      console.error(error);
    }
  };

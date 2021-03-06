import { usersApi } from '../../api/api'
import { ResultCodes } from '../../api/types'
import { ThunkType1 } from '../types/common'
import { UserAction } from '../types/users'
import { setLoading, setTotalUsers, setUsers, toggleFollow, toggleFollowingProgress } from './users-action'

export const toggleFollowUser =
  (id: number, followed: boolean): ThunkType1<UserAction> =>
  async (dispatch) => {
    try {
      dispatch(setLoading())
      const { resultCode } = await usersApi.followUser(id, followed)

      if (resultCode === ResultCodes.Success) {
        dispatch(toggleFollow(id))
        dispatch(toggleFollowingProgress(id))
      }
    } catch (error) {
      console.error(error)
    }
  }

export const loadUsers =
  (currentPage: number, pageSize: number): ThunkType1<UserAction> =>
  async (dispatch) => {
    try {
      dispatch(setLoading())
      const { error, items, totalCount } = await usersApi.getUsersPage(currentPage, pageSize)
      if (!error) {
        dispatch(setUsers(items))
        dispatch(setTotalUsers(totalCount))
      }
    } catch (error) {
      console.error(error)
    }
  }

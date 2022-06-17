import { makeAutoObservable } from 'mobx'
import { usersApi } from '../api/api'
import { ResultCodes } from '../api/types'
import { Users as UsersType } from '../store/types/users'

class Users {
  usersList = [] as UsersType[]
  totalUsersCount = 0
  pageSize = 5
  currentPage = 1
  status = 'loading'
  followingInProgress = [] as any // users id

  constructor() {
    makeAutoObservable(this)
  }

  toggleFollow(id: number) {
    this.usersList.map((user) => (user.id === id ? (user.followed = !user.followed) : user))
    this.status = 'fulfilled'
  }

  setUsers(data: UsersType[]) {
    this.usersList = data
    this.status = 'fulfilled'
  }

  setLoading() {
    this.status = 'loading'
  }

  toggleFollowingProgress(id: number) {
    this.followingInProgress =
      this.status === 'loading'
        ? this.followingInProgress.push(id)
        : this.followingInProgress.filter((item: any) => item !== id)
  }

  setTotalUsers(count: number) {
    this.totalUsersCount = count
  }

  setCurrentPage = (page: number) => {
    this.currentPage = page
  }

  toggleFollowUser = async (id: number, followed: boolean) => {
    try {
      this.setLoading()
      const { resultCode } = await usersApi.followUser(id, followed)

      if (resultCode === ResultCodes.Success) {
        this.toggleFollow(id)
        this.toggleFollowingProgress(id)
      }
    } catch (error) {
      console.error(error)
    }
  }

  loadUsers = async (currentPage: number, pageSize: number) => {
    try {
      this.setLoading()
      const { error, items, totalCount } = await usersApi.getUsersPage(currentPage, pageSize)
      if (!error) {
        this.setUsers(items)
        this.setTotalUsers(totalCount)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Users()

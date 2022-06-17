import { Photos } from '../types/profile'
import * as actions from '../users/users-action'

export enum UserActionType {
  SET_USERS = 'users/SET_USERS',
  SET_TOTAL_USERS = 'users/SET_TOTAL_USERS',
  SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
  SET_LOADING = 'users/SET_LOADING',
  TOGGLE_FOLLOW = 'users/TOGGLE_FOLLOW',
  TOGGLE_FOLLOW_PROGRESS = 'users/TOGGLE_FOLLOW_PROGRESS',
}

export interface InitialState {
  users: Users[] | []
  totalUsersCount: number
  pageSize: number
  currentPage: number
  status: string | null
  followingInProgress: number[] | []
}

export type Users = {
  name: string | null
  id: number | null
  uniqueUrlName?: string | null
  photos: Photos
  status: string | null
  followed: boolean
}

type ActionReturnType<T> = T extends { [key: string]: (...args: any[]) => infer R } ? R : never
export type UserAction = ActionReturnType<typeof actions>

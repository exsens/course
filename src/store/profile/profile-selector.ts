import { RootState } from '../types/common'

export const selectProfileData = (state: RootState) => state.profileData
export const selectProfileInfo = (state: RootState) => state.profileData.profileInfo
export const selectProfilePosts = (state: RootState) => state.profileData.posts

// import { createSelector } from 'reselect';

// const getCasualPosts = (selectProfilePosts, (posts) => {
//   return posts.filter((post) => true)
// })

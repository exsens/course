// import { createSelector } from 'reselect';

export const selectProfileData = (state) => state.profileData;
export const selectProfileInfo = (state) => state.profileData.profileInfo;
export const selectProfilePosts = (state) => state.profileData.posts;

// const getCasualPosts = (selectProfilePosts, (posts) => {
//   return posts.filter((post) => true)
// }) 

import { RootState } from '../types/common';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectAuthData = (state: RootState) => state.auth;
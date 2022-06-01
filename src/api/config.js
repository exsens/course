const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const getUsersPage = (page, count) => `${BASE_URL}users?page=${page}&count=${count}`;
export const getProfileById = (id) => `${BASE_URL}profile/${id}`;
export const getUserStatusById = (id) => `${BASE_URL}profile/status/${id}`;
export const updateUserStatus = () => `${BASE_URL}profile/status`;

export const getAuthMe = () => `${BASE_URL}auth/me`;
export const getAuthLogin = () => `${BASE_URL}auth/login`;

export const followUser = (id) => `${BASE_URL}follow/${id}`

// export const getUsersLimit = (limit, offset) => `${BASE_URL}users?limit=${limit}&${offset}`
// export const getUsersLimit = (limit, offset) => `${BASE_URL}users?limit=${limit}&${offset}`
// export const getTotalUsers = () => `${BASE_URL}total?limit=1`
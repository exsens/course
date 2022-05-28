const BASE_URL = 'https://mockend.com/exsens/course/';

export const getUsers = () => `${BASE_URL}users`
export const getUsersLimit = (limit, offset) => `${BASE_URL}users?limit=${limit}&${offset}`
export const getTotalUsers = () => `${BASE_URL}total?limit=1`
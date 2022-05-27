export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const SET_USERS = 'SET_USERS';

export const toggleFollow = (id) => {
  return {
    type: TOGGLE_FOLLOW,
    payload: id,
  }
};

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  }
}

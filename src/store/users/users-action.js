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

// export const loadUsers = () => (dispatch, _, { client, api }) => {
//   client.get(api.getUsers())
//     .then((data) => dispatch(setUsers(data)))
//     .catch((error) => console.error(error))

//   console.log('load')
// }
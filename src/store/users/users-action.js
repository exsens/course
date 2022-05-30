export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOADING = 'SET_LOADING';

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

export const setTotalUsers = (data) => {
  return {
    type: SET_TOTAL_USERS,
    payload: data,
  }
}

export const selectPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

// export const loadUsers = () => (dispatch, _, { client, api }) => {
//   client.get(api.getUsers())
//     .then((data) => dispatch(setUsers(data)))
//     .catch((error) => console.error(error))

//   console.log('load')
// }

export const followUser = (id) => async (dispatch, _, {client, api}) => {
  try {
    const request = await client.delete(api.followUser(id), {
      withCredentials: true,
      headers: {
        "API-KEY": '7a305640-b547-4a06-b77e-c4e9d81c2dbc'
      }
    })
    if (request.data.resultCode === 0) {
      dispatch(toggleFollow(id))
    }
  } catch (error) {
    console.error(error)
  }
}

export const unFollowUser = (id) => async (dispatch, _, {client, api}) => {
  try {
    const request = await client.post(api.followUser(id), {}, {
      withCredentials: true,
      headers: {
        "API-KEY": '7a305640-b547-4a06-b77e-c4e9d81c2dbc'
      }
    })
    if (request.data.resultCode === 0) {
      dispatch(toggleFollow(id))
    }
  } catch (error) {
    console.error(error)
  }
}

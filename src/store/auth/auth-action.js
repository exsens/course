export const SET_AUTH_DATA = 'SET_AUTH_DATA';

const setUserData = ({id: userId, login, email}) => {
  return {
    type: SET_AUTH_DATA,
    payload: {userId, login, email}
  }
};

export const getAuth = () => async(dispatch, _, {client, api}) => {
  const request =  await client.get(api.authMe(), {
    withCredentials: true,
  })
  dispatch(setUserData({...request.data.data}))
}
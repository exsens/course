export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST = "UPDATE_NEW_POST";
export const SET_PROFILE = "SET_PROFILE";
export const SET_LOADING = "SET_LOADING";

export const addPost = (text) => ({ type: ADD_POST, payload: text });

const setProfile = (data) => ({ type: SET_PROFILE, payload: data });

const setLoading = () => ({ type: SET_LOADING });

export const loadProfile =
  (id) =>
  async (dispatch, _, { client, api }) => {
    try {
      dispatch(setLoading());
      const request = await client.get(api.getProfileById(id));
      return dispatch(setProfile(request.data));
    } catch (error) {
      console.error(error);
    }
  };

export const ADD_POST = "profile/ADD_POST";
export const UPDATE_NEW_POST = "profile/UPDATE_NEW_POST";
export const SET_PROFILE = "profile/SET_PROFILE";
export const SET_LOADING = "profile/SET_LOADING";

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

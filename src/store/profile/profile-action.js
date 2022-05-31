export const ADD_POST = "profile/ADD_POST";
export const UPDATE_NEW_POST = "profile/UPDATE_NEW_POST";
export const SET_PROFILE = "profile/SET_PROFILE";
export const SET_LOADING = "profile/SET_LOADING";
export const SET_STATUS = "profile/SET_STATUS";

export const addPost = (text) => ({ type: ADD_POST, payload: text });

const setProfile = (data) => ({ type: SET_PROFILE, payload: data });

const setLoading = () => ({ type: SET_LOADING });

const setStatus = (text) => ({ type: SET_STATUS, payload: text });

// thunk

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

export const getStatus =
  (id) =>
  async (dispatch, _, { client, api }) => {
    try {
      const { data, status } = await client.get(api.getUserStatusById(id));
      if (status === 200) {
        dispatch(setStatus(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const updateStatus =
  (status) =>
  async (dispatch, _, { client, api }) => {
    try {
      const { data } = await client.put(
        api.updateUserStatus(),
        { status },
        {
          withCredentials: true,
          headers: {
            "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
          },
        }
      );
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      } else if (data.resultCode === 1) {
        status = status.slice(0, 50);
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.error(error);
    }
  };

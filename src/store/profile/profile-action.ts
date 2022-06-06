import { ProfileInfo, Photos } from "./profile-reducer";

export const ADD_POST = "profile/ADD_POST";
export const UPDATE_NEW_POST = "profile/UPDATE_NEW_POST";
export const SET_PROFILE = "profile/SET_PROFILE";
export const SET_LOADING = "profile/SET_LOADING";
export const SET_STATUS = "profile/SET_STATUS";
export const SET_AVATAR = "profile/SET_AVATAR";

type Addpost = {
  type: typeof ADD_POST;
  payload: string;
};

type SetProfile = {
  type: typeof SET_PROFILE;
  payload: ProfileInfo;
};

type SetLoading = {
  type: typeof SET_LOADING;
};

type SetStatus = {
  type: typeof SET_STATUS;
  payload: string;
};


type SetAvatar = {
  type: typeof SET_AVATAR,
  payload: Photos,
}
export const addPost = (text: string): Addpost => ({
  type: ADD_POST,
  payload: text,
});

const setProfile = (data: ProfileInfo): SetProfile => ({
  type: SET_PROFILE,
  payload: data,
});

const setLoading = (): SetLoading => ({ type: SET_LOADING });

const setStatus = (text: string): SetStatus => ({
  type: SET_STATUS,
  payload: text,
});

const setAvatar = (img: Photos): SetAvatar => ({ type: SET_AVATAR, payload: img });

// thunk

export const loadProfile =
  (id: number) =>
  async (dispatch: Function, _: any, { client, api }: any) => {
    try {
      dispatch(setLoading());
      const request = await client.get(api.getProfileById(id));
      return dispatch(setProfile(request.data));
    } catch (error) {
      console.error(error);
    }
  };

export const getStatus =
  (id: number) =>
  async (dispatch: Function, _: any, { client, api }: any) => {
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
  (status: string) =>
  async (dispatch: Function, _: any, { client, api }: any) => {
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

export const loadUserAvatar =
  (img: any) =>
  async (dispatch: Function, _: any, { client, api }: any) => {
    const newImg = new FormData();
    newImg.append("image", img);
    const { data } = await client.post(api.putAvatar(), newImg, {
      withCredentials: true,
      headers: {
        "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
        "Content-Type": "multipart/form-data",
      },
    });

    try {
      if (data.resultCode === 0) {
        dispatch(setAvatar(data.data.photos));
      }
    } catch (error) {
      console.log(error);
    }
  };


export const updateProfileInfo =
  (formData: ProfileInfo) =>
  async (dispatch: Function, getState: any, { client, api }: any) => {
    const userId = getState().auth.userId;
    const { data } = await client.put(api.updateProfileInfo(), formData, {
      withCredentials: true,
      headers: {
        "API-KEY": "7a305640-b547-4a06-b77e-c4e9d81c2dbc",
      },
    });
    try {
      if (data.resultCode === 0) {
        dispatch(loadProfile(userId));
      } else {
        console.error(data.resultCode);
      }
    } catch (error) {
      console.error(error);
    }
  };

import { getAuth } from "../auth/auth-action.js";
import { loadProfile } from "../profile/profile-action.js";

export const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export const setInitializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializedApp = () => async (dispatch) => {
  await Promise.all([dispatch(getAuth())]);

  dispatch(setInitializedSuccess());
};

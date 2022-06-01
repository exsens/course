import { getAuth } from "../auth/auth-action.js";

export const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export const setInitializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializedApp = () => async (dispatch) => {
  await dispatch(getAuth());

  dispatch(setInitializedSuccess());
};

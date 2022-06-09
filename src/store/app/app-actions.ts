import { getAuth } from "../auth/auth-thunk";

export const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

type SetInitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS;
};

export const setInitializedSuccess = (): SetInitializedSuccess => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializedApp = () => async (dispatch: Function) => {
  await Promise.all([dispatch(getAuth())]);
  dispatch(setInitializedSuccess());
};

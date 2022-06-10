import { setInitializedSuccess } from "./app-actions";
import { getAuth } from "../auth/auth-thunk";
import { ThunkType } from "../types/common"

export const initializedApp = ():ThunkType => async (dispatch) => {
  await Promise.all([dispatch(getAuth())]);
  dispatch(setInitializedSuccess());
};

import { AppActionType } from "../types/app";

export const setInitializedSuccess = () =>
  ({
    type: AppActionType.INITIALIZED_SUCCESS,
  } as const);

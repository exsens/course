import { AppActionType, AppAction } from "../types/app";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case AppActionType.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};


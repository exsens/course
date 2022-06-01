import { INITIALIZED_SUCCESS } from "./app-actions.js";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};


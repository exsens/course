import { INITIALIZED_SUCCESS } from "./app-actions";

export type InitialState = {
  initialized: boolean,
};

type Action = {
  type: typeof INITIALIZED_SUCCESS,
}

const initialState: InitialState = {
  initialized: false,
};

export const appReducer = (state = initialState, { type }: Action): InitialState => {
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


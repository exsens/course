import { TOGGLE_FOLLOW, SET_USERS } from "./users-action.js";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS: {
      return {
        ...state,
        users: payload
      };
    }

    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => user.id === payload ? { ...user, followed: !user.followed } : user)
      };
    }

    default:
      return state;
  }
}
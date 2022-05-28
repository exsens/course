import { TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_USERS, SET_CURRENT_PAGE } from "./users-action.js";

const initialState = {
  users: [],
  total: 0,
  pageSize: 5,
  currentPage: 1,
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

    case SET_TOTAL_USERS: {
      return {
        ...state,
        total: payload
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
      }
    }

    default:
      return state;
  }
}
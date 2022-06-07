import { InitialState, UserAction, UserActionType } from "../types/users";

const initialState: InitialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 1,
  status: "loading",
  followingInProgress: [], // array users ids
};

export const usersReducer = (
  state = initialState,
  { type, payload }: UserAction
): InitialState => {
  switch (type) {
    case UserActionType.SET_USERS: {
      return {
        ...state,
        users: payload,
        status: "fulfilled",
      };
    }

    case UserActionType.SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

    case UserActionType.TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload ? { ...user, followed: !user.followed } : user
        ),
        status: 'fulfilled',
      };
    }

    case UserActionType.TOGGLE_FOLLOW_PROGRESS: {
      return {
        ...state,
        followingInProgress:
          state.status === "loading"
            ? [...state.followingInProgress, payload]
            : state.followingInProgress.filter((id) => id !== payload),
      };
    }

    case UserActionType.SET_TOTAL_USERS: {
      return {
        ...state,
        totalUsersCount: payload,
      };
    }

    case UserActionType.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
      };
    }

    default:
      return state;
  }
};

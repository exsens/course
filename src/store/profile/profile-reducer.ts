import { ProfileActionType, ProfileAction, ProfileInfo, Posts } from "../types/profile";

const initialState = {
  profileInfo: [] as ProfileInfo | [],

  posts: [
    {
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "lor sit amet",
    },
    {
      text: "ipsum dolor",
    },
  ] as Posts[] | [],

  status: "",
};

type StateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action : ProfileAction
): StateType => {
  switch (action.type) {
    case ProfileActionType.ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            text: action.payload,
          },
        ],
      };
    }

    case ProfileActionType.SET_PROFILE: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, ...action.payload },
        status: "fulfilled",
      };
    }

    case ProfileActionType.SET_STATUS: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, status: action.payload },
      };
    }

    case ProfileActionType.SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

    case ProfileActionType.SET_AVATAR: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: action.payload },
      };
    }

    default:
      return state;
  }
};

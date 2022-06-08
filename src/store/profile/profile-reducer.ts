import { ProfileActionType, ProfileActions, ProfileInfo, Posts } from "../types/profile";
import { Nullable } from "../types/common";

const initialState = {
  profileInfo: null as Nullable<ProfileInfo>,

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
  ] as Nullable<Posts[]>,

  status: "",
};

type StateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  { type, payload }: ProfileActions
): StateType => {
  switch (type) {
    case ProfileActionType.ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            text: payload,
          },
        ],
      };
    }

    case ProfileActionType.SET_PROFILE: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, ...payload },
        status: "fulfilled",
      };
    }

    case ProfileActionType.SET_STATUS: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, status: payload },
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
        profileInfo: { ...state.profileInfo, photos: payload },
      };
    }

    default:
      return state;
  }
};

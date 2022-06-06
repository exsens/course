import {
  ADD_POST,
  SET_PROFILE,
  SET_LOADING,
  SET_STATUS,
  SET_AVATAR,
} from "./profile-action";

type Contacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type Photos = {
  small: string | null,
  large: string | null,
}

export type ProfileInfo = {
  id: number;
  fullName: string;
  status: string;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: Contacts;
  photos: Photos;
};

type Posts = {
  text: string;
};

const initialState = {
  profileInfo: null as ProfileInfo | null,

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
  ] as Array<Posts>,

  status: "",
};

export type InitialState = typeof initialState;

export const profileReducer = (
  state = initialState,
  { type, payload }: any
): InitialState => {
  switch (type) {
    case ADD_POST: {
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

    case SET_PROFILE: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, ...payload },
        status: "fulfilled",
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, status: payload } as ProfileInfo,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

    case SET_AVATAR: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: payload } as ProfileInfo,
      };
    }

    default:
      return state;
  }
};

import {
  ADD_POST,
  UPDATE_NEW_POST,
  SET_PROFILE,
  SET_LOADING,
  SET_STATUS,
  SET_AVATAR
} from "./profile-action.js";

const initialState = {
  profileInfo: {
    id: '',
    fullName: "",
    banner:
      "https://img3.goodfon.com/original/4368x2912/1/2f/ozero-gory-lesa-derevya.jpg",
    // info: [
    //   { title: 'Date of Birth', info: '19.02.1956' },
    //   { title: 'City', info: 'Minsk' },
    //   { title: 'Education', info: 'SU 11' },
    //   { title: 'website', info: 'www.www.ru' },
    // ],
    status: "",
  },

  posts: [
    {
      avatar:
        "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      avatar:
        "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg",
      text: "lor sit amet",
    },
    {
      avatar:
        "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg",
      text: "ipsum dolor",
    },
  ],

  status: "loading",
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            avatar:
              "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg",
            text: payload,
          },
        ],
      };
    }

    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPost: payload,
      };
    }

    case SET_PROFILE: {
      return {
        ...state,
        profileInfo: {...state.profileInfo, ...payload},
        status: "fulfilled",
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, status: payload}
      }
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
        profileInfo: {...state.profileInfo, photos: payload}
      }
    }

    default:
      return state;
  }
};

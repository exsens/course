import { ADD_POST, UPDATE_NEW_POST } from "./profile-action.js";

const initialState = {
  profileInfo: {
    id: 24242,
    aboutMe: '',
    fullName: '',
    banner: 'https://img3.goodfon.com/original/4368x2912/1/2f/ozero-gory-lesa-derevya.jpg',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg',
    info: [
      { title: 'Date of Birth', info: '19.02.1956' },
      { title: 'City', info: 'Minsk' },
      { title: 'Education', info: 'SU 11' },
      { title: 'website', info: 'www.www.ru' },
    ],
  },

  posts: [
    {
      avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
      text: 'lor sit amet'
    },
    {
      avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
      text: 'ipsum dolor'
    },
  ],

  newPost: '',
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts,
        {
          avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
          text: state.newPost
        }]
      }
    }

    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPost: payload
      }
    }
    default:
      return state;
  }
}


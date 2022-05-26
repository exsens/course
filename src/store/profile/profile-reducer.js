import { ADD_POST, UPDATE_NEW_POST } from "./profile-action.js";

export const profileReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_POST: {
      state.posts.push({
        avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
        text: state.newPost
      });

      return state;
    }

    case UPDATE_NEW_POST: {
      state.newPost = payload;
      return state;
    }
    default:
      return state;
  }
}


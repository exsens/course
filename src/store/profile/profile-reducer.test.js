import { addPost } from "./profile-action.js";
import { profileReducer } from "./profile-reducer.js";



it('length of posts should be inc', () => {
  let action = addPost('text')
  let state = {

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

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
})
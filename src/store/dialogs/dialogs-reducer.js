import { ADD_MESSAGE } from "./dialogs-action.js";

export const dialogsReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      const userId = state.messages
        .findIndex((el) => el.id === payload.id);
      state.messages[userId].text.push(payload.text)

      return state;
    }

    default:
      return state;
  }
}

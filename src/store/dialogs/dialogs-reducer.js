import { ADD_MESSAGE } from "./dialogs-action.js";

const initialState = {
  users: [
    { id: '0', name: 'JO' },
    { id: '1', name: 'WEL' },
    { id: '2', name: 'aaaaaaaaaaaaa' },
  ],

  messages: [
    { id: '0', text: ['Hi', 'Lorem, ipsum.'] },
    { id: '1', text: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.'] },
    { id: '2', text: ['Hi', 'dolor ipsum .', 'Spasda', 'Lorem', 'ipsum dolor.'] },
  ],
};

export const dialogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === payload.id) {
            return {
              ...message,
              text: [...message.text, payload.text]
            }
          }
          return message;
        })
      }
    }

    default:
      return state;
  };
};

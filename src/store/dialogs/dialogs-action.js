export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageAction = ({ id, text }) => ({ type: ADD_MESSAGE, payload: { id, text } });


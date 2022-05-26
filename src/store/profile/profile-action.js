export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = (text) => ({ type: UPDATE_NEW_POST, payload: text })
import { TOGGLE_FOLLOW, SET_USERS } from "./users-action.js";

const initialState = {
  users: [
    {id: 0, userPhoto: 'https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg', followed: true, userName: 'JOHN', status: 'status check', location: {country: 'Belarus', city: 'Minsk'}},
    {id: 1, userPhoto: 'https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg', followed: false, userName: 'SMITH', status: 'Lorem, ipsum.', location: {country: 'Belarus', city: 'Minsk'}},
    {id: 2, userPhoto: 'https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg', followed: true, userName: 'BARBOS', status: 'Lorem ipsum dolor sit amet.', location: {country: 'Belarus', city: 'Minsk'}},
  ]
};

export const usersReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_USERS: {
      return {
        ...state,
        users: [
          ...state.users,
          payload
        ]
      };
    }

    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => user.id === payload ? {...user, followed: !user.followed} : user)
      };
    }

    default:
      return state;
  }
}
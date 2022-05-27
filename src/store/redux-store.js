import { createStore, combineReducers } from 'redux'
import { profileReducer } from './profile/profile-reducer.js';
import { dialogsReducer } from './dialogs/dialogs-reducer.js'
import { navbarReducer } from './navbar/navbar-reducer.js';
import { usersReducer } from "./users/users-reducer.js";


const rootReducers = combineReducers({
  profileData: profileReducer,
  dialogsData: dialogsReducer,
  sidebar: navbarReducer,
  usersData: usersReducer,
})

const store = createStore (rootReducers);

export default store;
import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { appReducer } from './app/app-reducer'
import { authReducer } from './auth/auth-reducer'
import { dialogsReducer } from './dialogs/dialogs-reducer'
import { navbarReducer } from './navbar/navbar-reducer'
import { profileReducer } from './profile/profile-reducer'
import { usersReducer } from './users/users-reducer'

export const rootReducers = combineReducers({
  app: appReducer,
  profileData: profileReducer,
  dialogsData: dialogsReducer,
  sidebar: navbarReducer,
  usersData: usersReducer,
  auth: authReducer,
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

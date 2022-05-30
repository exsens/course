import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../api/config";

import { profileReducer } from "./profile/profile-reducer.js";
import { dialogsReducer } from "./dialogs/dialogs-reducer.js";
import { navbarReducer } from "./navbar/navbar-reducer.js";
import { usersReducer } from "./users/users-reducer.js";
import { authReducer } from "./auth/auth-reducer.js";

const rootReducers = combineReducers({
  profileData: profileReducer,
  dialogsData: dialogsReducer,
  sidebar: navbarReducer,
  usersData: usersReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);

// const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

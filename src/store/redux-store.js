import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../api/config";

import { reducer as formReducer } from "redux-form";
import { profileReducer } from "./profile/profile-reducer";
import { dialogsReducer } from "./dialogs/dialogs-reducer";
import { navbarReducer } from "./navbar/navbar-reducer.js";
import { usersReducer } from "./users/users-reducer";
import { authReducer } from "./auth/auth-reducer";
import { appReducer } from "./app/app-reducer";

const rootReducers = combineReducers({
  app: appReducer,
  form: formReducer,
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

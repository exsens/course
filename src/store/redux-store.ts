import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk  from "redux-thunk";
import axios, { AxiosStatic } from "axios";
import * as api from "../api/config";

import { reducer as formReducer } from "redux-form";
import { profileReducer } from "./profile/profile-reducer";
import { dialogsReducer } from "./dialogs/dialogs-reducer";
import { navbarReducer } from "./navbar/navbar-reducer";
import { usersReducer } from "./users/users-reducer";
import { authReducer } from "./auth/auth-reducer";
import { appReducer } from "./app/app-reducer";

export const rootReducers = combineReducers({
  app: appReducer,
  form: formReducer,
  profileData: profileReducer,
  dialogsData: dialogsReducer,
  sidebar: navbarReducer,
  usersData: usersReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      } as Extra)
    )
  )
);

export type Extra = {
  client: AxiosStatic;
  api: any;
};

export default store;

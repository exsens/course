import { Route, Routes } from "react-router-dom";

import Profile from "../../page/profile/profile.jsx";
import Dialogs from "../../page/dialogs/dialogs.jsx";
import Users from "../../page/users/users.jsx";
import Login from "../../page/login/login.jsx";
import RequireAuth from "../../hoc/requireAuth.jsx";

import c from "./content.module.scss";

const Content = () => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route
          path="profile/*"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="profile/:id"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="dialogs/*"
          element={
            <RequireAuth>
              <Dialogs />
            </RequireAuth>
          }
        />
        <Route path="users" element={<Users />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Content;

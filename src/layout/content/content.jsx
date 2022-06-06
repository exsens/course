import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Page404 from "../../page/page-404/page-404.jsx";
import Dialogs from "../../page/dialogs/dialogs.jsx";
import Users from "../../page/users/users.jsx";
import Preloader from "../../components/preloader/preloader.jsx";
import WithRequireAuth from "../../hoc/withRequireAuth.jsx";

import c from "./content.module.scss";

const Profile = lazy(() => import("../../page/profile/profile.jsx"));
const Login = lazy(() => import("../../page/login/login.jsx"));

const Content = () => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route
          path="profile/*"
          element={
            <Suspense fallback={<Preloader />}>
              <WithRequireAuth>
                <Profile />
              </WithRequireAuth>
            </Suspense>
          }
        />
        <Route
          path="profile/:id"
          element={
            <Suspense fallback={<Preloader />}>
              <WithRequireAuth>
                <Profile />
              </WithRequireAuth>
            </Suspense>
          }
        />
        <Route
          path="dialogs/*"
          element={
            <WithRequireAuth>
              <Dialogs />
            </WithRequireAuth>
          }
        />
        <Route path="users" element={<Users />} />
        <Route
          path="login"
          element={
            <Suspense fallback={<Preloader />}>
              <Login />
            </Suspense>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};

export default Content;

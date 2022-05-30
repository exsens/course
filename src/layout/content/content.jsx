import { Route, Routes } from "react-router-dom";

import Profile from "../../page/profile/profile.jsx";
import Dialogs from "../../page/dialogs/dialogs.jsx";
import Users from "../../page/users/users.jsx";

import c from "./content.module.scss";

const Content = () => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route path="profile/*" element={<Profile />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="dialogs/*" element={<Dialogs />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </main>
  );
};

export default Content;

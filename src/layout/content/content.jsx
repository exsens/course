import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Preloader from '../../components/preloader/preloader'
import WithRequireAuth from '../../hoc/withRequireAuth'
import Dialogs from '../../page/dialogs/dialogs'
import Page404 from '../../page/page-404/page-404'
import Profile from '../../page/profile/profile'
import Users from '../../page/users/users'
import c from './content.module.scss'

const Login = lazy(() => import('../../page/login/login'))

const Content = () => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route
          path="profile/*"
          element={
            <WithRequireAuth>
              <Profile />
            </WithRequireAuth>
          }
        />
        <Route
          path="profile/:id"
          element={
            <WithRequireAuth>
              <Profile />
            </WithRequireAuth>
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
  )
}

export default Content

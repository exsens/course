import { lazy, Suspense, useEffect } from 'react'
import { Layout, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Preloader from '../components/preloader/preloader'
import auth from '../mobx/auth'

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  )
}
const Routing = () => {
  const { isAuth } = auth
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isAuth) {
      return navigate('/')
    } else {
      return navigate('/login')
    }
  }, [isAuth])

  if (isAuth) {
    return (
      <>
        <Routes>
          <Route path="profile/*" element={<Profile />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="dialogs/*" element={<Dialogs />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    )
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" state={{ from: location }} />} />
    </Routes>
  )
}

const Profile = Loadable(lazy(() => import('../page/profile/profile')))
const Page404 = Loadable(lazy(() => import('../page/page-404/page-404')))
const Dialogs = Loadable(lazy(() => import('../page/dialogs/dialogs')))
const Users = Loadable(lazy(() => import('../page/users/users')))
const Login = Loadable(lazy(() => import('../page/login/login.jsx')))

export default Routing

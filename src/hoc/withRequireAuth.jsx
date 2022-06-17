import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import auth from '../mobx/auth'

const WithRequireAuth = observer(({ children }) => {
  const location = useLocation()
  const { isAuth } = auth

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
})

export default WithRequireAuth

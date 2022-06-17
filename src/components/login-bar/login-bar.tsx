import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import auth from '../../mobx/auth'

const LoginBar: React.FC = observer(() => {
  const { isAuth, logOut } = auth

  const handleLogOut = () => {
    logOut()
  }

  return <>{!isAuth ? <Link to="/login">Login</Link> : <button onClick={handleLogOut}>Quit</button>}</>
})

export default LoginBar

import LoginBar from '../../components/login-bar/login-bar'
import Logo from '../../components/logo/logo'
import c from './header.module.scss'

const Header = () => {
  return (
    <header className={c.header}>
      <Logo />
      <LoginBar />
    </header>
  )
}

export default Header

import c from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={c.nav}>
    <ul className={c.nav__list}>
      <li className={c.nav__item} >Profile</li>
      <li className={c.nav__item} >Messages</li>
      <li className={c.nav__item} >News</li>
      <li className={c.nav__item} >Music</li>
      <li className={c.nav__item} >Setting</li>
    </ul>
    </nav>
  )
}

export default Nav;
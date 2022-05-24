import { NavLink } from 'react-router-dom'
import c from './nav.module.scss';

const setActive = ({isActive}) => isActive ? c.nav__item_active : ''; 

const Nav = () => {


  return (
    <nav className={c.nav}>
      <ul className={c.nav__list}>
        <li className={c.nav__item} >
          <NavLink className={setActive} to='/profile'>Profile</NavLink>
        </li>
        <li className={c.nav__item} >
          <NavLink className={setActive} to='/dialogs'>Dialogs</NavLink>
        </li>
        <li className={c.nav__item} >
          <NavLink className={setActive} to=''>News</NavLink>
        </li>
        <li className={c.nav__item} >
          <NavLink className={setActive} to=''>Music</NavLink>
        </li>
        <li className={c.nav__item} >
          <NavLink className={setActive} to=''>Setting</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
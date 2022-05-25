import { NavLink } from 'react-router-dom'
import c from './nav.module.scss';

const setActive = ({ isActive }) => isActive ? c.nav__item_active : '';

const Nav = ({ navigation }) => {

  return (
    <nav className={c.nav}>
      <ul className={c.nav__list}>
        {navigation.map((item, idx) => {
          return (
            <li className={c.nav__item} key={idx}>
              <NavLink className={setActive} to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav;
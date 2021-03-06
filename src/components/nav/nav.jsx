import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import navbar from '../../mobx/navbar'
import c from './nav.module.scss'

const setActive = ({ isActive }) => (isActive ? c.nav__item_active : '')

export const Nav = observer(() => {
  return (
    <nav className={c.nav}>
      <ul className={c.nav__list}>
        {navbar.navigation.map((item, idx) => {
          return (
            <li className={c.nav__item} key={idx}>
              <NavLink className={setActive} to={`/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
})

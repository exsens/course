import { NavLink } from 'react-router-dom'
import c from './members-item.module.scss'

interface PropsType {
  id: number
  name: string
}

const MembersItem: React.FC<PropsType> = ({ id, name }) => {
  return (
    <li className={c.members_item}>
      <NavLink to={`${id}`} className={({ isActive }) => (isActive ? c.members_item_active : '')}>
        <div className={c.members_item_img}>
          <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="img" />
        </div>
        <span className={c.members_item_text}>{name.length < 8 ? name : name.slice(0, 8) + '...'}</span>
      </NavLink>
    </li>
  )
}

export default MembersItem

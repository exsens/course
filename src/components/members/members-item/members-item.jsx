import { NavLink } from 'react-router-dom';
import c from './members-item.module.scss';

const setActive = ({ isActive }) => isActive ? c.members_item_active : '';

const MembersItem = ({ id, name }) => {
  return (
    <li className={c.members_item}>
      <NavLink to={`${id}`} className={setActive}>
        <div className={c.members_item_img}>
          <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="img" />
        </div>
        <span className={c.members_item_text}>{name.length < 8 ? name : name.slice(0, 8) + '...'}</span>
      </NavLink>
    </li>
  )
}

export default MembersItem;
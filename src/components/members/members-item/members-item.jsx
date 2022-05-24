import { NavLink } from 'react-router-dom';
import c from './members-item.module.scss';

const setActive = ({ isActive }) => isActive ? c.members_item_active : '';

const MembersItem = ({ id, name }) => {
  return (
    <li className={c.members_item}>
      <NavLink to={`${id}`} className={setActive}>
        <div className={c.members_item}>
          <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1652998232-bpthumb.jpg" alt="img" />
        </div>
        <span className={c.members_text}>{name}</span>
      </NavLink>
    </li>
  )
}

export default MembersItem;
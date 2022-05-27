import Flex from '../flex/flex.jsx';
import { Link } from 'react-router-dom';
import Button from '../button/button'

import c from './user-item.module.scss';

const UsersItem = ({ toggleFollow, id, userPhoto, followed, userName, status, location }) => {
  
  return (
    <li className={c.user_item}>
      <Flex>
        <div className="user-control">
          <Link to={`${id}`} className={c.img}>
            <img src={userPhoto} alt={userName} />
          </Link>
          <Button onClick={() => toggleFollow(id)} type="button">{followed ? 'followed' : 'unfollowed'}</Button>
        </div>
        <div className={c.user_info}>
          <div className="user-box">
            <h3 style={{ marginBottom: '15px' }}>{userName}</h3>
            <p>{status}</p>
          </div>
          <div className="user-box">
            <div>{`${location.country},`}</div>
            <div>{location.city}</div>
          </div>
        </div>
      </Flex>
    </li>
  )
}

export default UsersItem
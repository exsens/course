import Flex from '../flex/flex.jsx';
import { Link } from 'react-router-dom';
import Button from '../button/button'

import c from './user-item.module.scss';

const UsersItem = ({ toggleFollow, id, userPhoto, followed, company, name, email, address }) => {
  
  return (
    <li className={c.user_item}>
      <Flex>
        <div className="user-control">
          <Link to={`${id}`} className={c.img}>
            <img src={userPhoto || 'https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg'} alt={name} />
          </Link>
          <Button onClick={() => toggleFollow(id)} type="button">{followed ? 'followed' : 'unfollowed'}</Button>
        </div>
        <div className={c.user_info}>
          <div className="user-box">
            <h3 style={{ marginBottom: '15px' }}>{name}</h3>
            <p>{company.catchPhrase}</p>
          </div>
          <div className="user-box">
            <div>{address.city}</div>
            <div>{email}</div>
          </div>
        </div>
      </Flex>
    </li>
  )
}

export default UsersItem
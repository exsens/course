import React from 'react';
import MembersItem from '../members-item/members-item.jsx';

import c from './members-list.module.scss'

const MembersList = ({users}) => {
  return (
    <ul className={c.members_list}>
       {users.map(user => {
        return <MembersItem key={user.id} {...user}/>
      })}
    </ul>
  )
}

export default MembersList
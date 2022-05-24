import React from 'react';
import MembersItem from '../members-item/members-item.jsx';

const MembersList = ({users}) => {
  return (
    <ul style={{marginRight: '15px'}}>
       {users.map(user => {
        return <MembersItem key={user.id} {...user}/>
      })}
    </ul>
  )
}

export default MembersList
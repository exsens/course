import React from 'react';
import { connect } from 'react-redux'
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
};

const mapStateToProps = (state) => ({
  users: state.dialogsData.users,
});

export default connect(mapStateToProps, null)(MembersList);
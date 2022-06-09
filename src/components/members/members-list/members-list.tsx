import React from "react";
import { connect } from "react-redux";

import { RootState } from '../../../store/types/common';

import MembersItem from "../members-item/members-item.jsx";
import { Users } from "../../../store/types/users";

import c from "./members-list.module.scss";

interface PropsType {
  users: Users[];
}

class MembersList extends React.Component<PropsType> {
  render() {
    const { users } = this.props;

    return (
      <ul className={c.members_list}>
        {users.map((user) => {
          return <MembersItem key={user.id} {...user} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.dialogsData.users,
});

export default connect(mapStateToProps, null)(MembersList);

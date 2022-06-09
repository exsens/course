import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../../store/types/common";

import MembersItem from "../members-item/members-item.jsx";
import { Users } from "../../../store/types/users";

import c from "./members-list.module.scss";

class MembersList extends React.Component<PropsFromRedux> {
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
{
  /* <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState> type state, typeDispatch, typeOwn, rootState*/
}

type PropsType = {
  users: Users[];
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps);
export default connector(MembersList);

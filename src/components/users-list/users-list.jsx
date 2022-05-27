import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import * as api from "../../api/config";
import { setUsers, toggleFollow } from "../../store/users/users-action.js";

import UsersItem from "../users-item/users-item.jsx";

class UsersList extends Component {
  componentDidMount() {
    const { setUsers } = this.props;

    axios
      .get(api.getUsers())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
    console.log("load", this.props);
  }

  render() {
    const { users, toggleFollow } = this.props;
    return users.map((user) => (
      <UsersItem key={user.id} toggleFollow={toggleFollow} {...user} />
    ));
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
  };
};

const mapStateToDispatch = {
  setUsers,
  toggleFollow,
};

export default connect(mapStateToProps, mapStateToDispatch)(UsersList);

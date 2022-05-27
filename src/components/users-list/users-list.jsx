import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as api from "../../api/config";
import { setUsers, toggleFollow } from "../../store/users/users-action.js";

import UsersItem from "../users-item/users-item.jsx";

class UsersList extends Component {
  constructor(props) {
    super(props)

    axios
      .get(api.getUsers())
      .then((data) => this.props.setUsers(data.data))
      .catch((error) => console.log(error));
  }


  render() {
    return this.users ? (
      this.props.users.map((user) => (
        <UsersItem key={user.id} toggleFollow={this.props.toggleFollow} {...user} />
      ))
    ) : (
      <h3>Loading...</h3>
    );
  }
}

// const UsersList = ({ users, toggleFollow, setUsers }) => {

//   if (!users.length) {
//     axios.get(api.getUsers())
//       .then((data) => setUsers(data.data))1
//       .catch((error) => console.log(error))
//   }
//   return (
//
//   )
// }

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    setUsers: (data) => {
      dispatch(setUsers(data));
    },

    toggleFollow: (id) => {
      dispatch(toggleFollow(id));
    },
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(UsersList);

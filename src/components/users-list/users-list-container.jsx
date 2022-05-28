import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as api from "../../api/config";

import {
  setUsers,
  toggleFollow,
  setTotalUsers,
  selectPage,
} from "../../store/users/users-action.js";

import UsersList from "./users-list.jsx";

class UserListContainer extends Component {
  componentDidMount() {
    const { setUsers, setTotalUsers, pageSize, currentPage } = this.props;

    axios
      .get(api.getUsersLimit(pageSize, currentPage))
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));

    axios
      .get(api.getTotalUsers())
      .then((data) => setTotalUsers(data.data[0].users))
      .catch((error) => console.error(error));
  }

  onSelectPage = (id) => {
    this.props.selectPage(id);

    axios
      .get(api.getUsersLimit(this.props.pageSize, this.props.currentPage))
      .then((data) => this.props.setUsers(data.data))
      .catch((error) => console.error(error));
  }

  render() {
    return <UsersList onSelectPage={this.onSelectPage} {...this.props}/>;
  }
}

const mapStateToProps = ({ usersData }) => {
  return {
    users: usersData.users,
    totalUsers: usersData.total,
    pageSize: usersData.pageSize,
    currentPage: usersData.currentPage,
  };
};

const mapStateToDispatch = {
  setUsers,
  toggleFollow,
  setTotalUsers,
  selectPage,
};

export default connect(mapStateToProps, mapStateToDispatch)(UserListContainer);

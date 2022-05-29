import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as api from "../../api/config";

import {
  setUsers,
  toggleFollow,
  setTotalUsers,
  selectPage,
  setLoading,
} from "../../store/users/users-action.js";

import UsersList from "./users-list.jsx";
import Preloader from "../preloader/preloader.jsx";

class UserListContainer extends Component {
  componentDidMount() {
    const { setUsers, setTotalUsers } = this.props;

    this.loadUsers(axios, api)
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));

    axios
      .get(api.getTotalUsers())
      .then((data) => setTotalUsers(data.data[0].users))
      .catch((error) => console.error(error));
  }

  loadUsers = async (client, api) => {
    this.props.setLoading();
    const data = await client.get(
      api.getUsersLimit(this.props.pageSize, this.props.currentPage)
    );
    return await data;
  };

  onSelectPage = (id) => {
    this.props.selectPage(id);

    this.loadUsers(axios, api)
      .then((data) => this.props.setUsers(data.data))
      .catch((error) => console.error(error));
  };

  render() {
    const { status } = this.props;

    return (
      <>
        {status === "loading"  && <Preloader />}
        <UsersList onSelectPage={this.onSelectPage} {...this.props} />
      </>
    );
  }
}

const mapStateToProps = ({ usersData }) => {
  return {
    users: usersData.users,
    totalUsers: usersData.totalUsersCount,
    pageSize: usersData.pageSize,
    currentPage: usersData.currentPage,
    status: usersData.status,
  };
};

const mapStateToDispatch = {
  setUsers,
  toggleFollow,
  setTotalUsers,
  selectPage,
  setLoading,
};

export default connect(mapStateToProps, mapStateToDispatch)(UserListContainer);

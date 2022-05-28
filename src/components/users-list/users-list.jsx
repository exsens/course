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

import UsersItem from "../users-item/users-item.jsx";
import Pagination from "../pagination/pagination.jsx";

class UsersList extends Component {
  componentDidMount() {
    const { setUsers, setTotalUsers, pageSize, currentPage} = this.props;

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
    const { users, toggleFollow, pageSize, totalUsers, currentPage } = this.props;
    const pagesTotal = Math.ceil(totalUsers / pageSize);
    const paginations = getPagination(pagesTotal);

    if (!users) <h3>Loading...</h3>
    return (
      <>
        {paginations.map((pagination, idx) => (
          <Pagination key={idx} currentPage={currentPage} onClick={this.onSelectPage}>{pagination}</Pagination>
        ))}
        {users.map((user) => (
          <UsersItem key={user.id} toggleFollow={toggleFollow} {...user} />
        ))}
      </>
    );
  }
}

const getPagination = (pagesTotal) => {
  const pages = [];
  for (let i = 1; i < pagesTotal; i++) {
    pages.push(i);
  }
  return pages;
};

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

export default connect(mapStateToProps, mapStateToDispatch)(UsersList);

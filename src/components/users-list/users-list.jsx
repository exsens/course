import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsers, selectUserPage, toggleFollow } from "../../store/users/users-action";
import { selectUsers } from "../../store/users/users-selector";

import UsersItem from "../users-item/users-item";
import Preloader from "../preloader/preloader";
import Pagination from "../common/pagination/pagination";

const UsersList = () => {
  const dispatch = useDispatch();
  const {pageSize, currentPage, totalUsersCount, users, status, followingInProgress} = useSelector(selectUsers)
  const onSelectPage = (id) => {
    dispatch(selectUserPage(id));
  }

  useEffect(function loadUsersToStore() {
    dispatch(loadUsers(currentPage, pageSize))
  }, [currentPage, pageSize, dispatch])
  
  return (
    <>
      {status === "loading" && <Preloader />}
      <Pagination onSelectPage={onSelectPage} pageInfo={{pageSize, currentPage, totalItemsCount: totalUsersCount}}/>
      {users.map((user) => (
        <UsersItem key={user.id} toggleFollow={toggleFollow} followingInProgress={followingInProgress} {...user} />
      ))}
    </>
  );
};



export default UsersList;

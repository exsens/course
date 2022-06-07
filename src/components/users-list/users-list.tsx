import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { loadUsers, selectUserPage } from "../../store/users/users-action";
import { selectUsers } from "../../store/users/users-selector";

import UsersItem from "../users-item/users-item";
import Preloader from "../preloader/preloader";
import Pagination from "../common/pagination/pagination";

const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const {pageSize, currentPage, totalUsersCount, users, status, followingInProgress} = useTypedSelector(selectUsers)
  
  const onSelectPage = (id:number) => {
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
        <UsersItem key={user.id} followingInProgress={followingInProgress} {...user} />
      ))}
    </>
  );
};



export default UsersList;

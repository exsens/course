import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { selectUserPage } from "../../store/users/users-action";
import { loadUsers } from "../../store/users/users-thunk";
import { selectUsers } from "../../store/users/users-selector";

import UsersItem from "../users-item/users-item";
import Preloader from "../preloader/preloader";
import Pagination from "../common/pagination/pagination";
import { useTypedDispatch } from "../../hooks/useAppDispatch";

const UsersList: React.FC = () => {
  const dispatch = useTypedDispatch();
  const {pageSize, currentPage, totalUsersCount, users, status, followingInProgress} = useTypedSelector(selectUsers)

  const onSelectPage = (id:number) => {
    dispatch(selectUserPage(id));
  }

  useEffect(function loadUsersToStore() {
    dispatch(loadUsers(currentPage, pageSize))
  }, [currentPage, pageSize, dispatch])
  
  if (status === "loading") {
     return <Preloader />
  }

  return (
    <>
      <Pagination onSelectPage={onSelectPage} pageInfo={{pageSize, currentPage, totalItemsCount: totalUsersCount}}/>
      {users.map((user) => (
        <UsersItem key={user.id} followingInProgress={followingInProgress} {...user} />
      ))}
    </>
  );
};



export default UsersList;

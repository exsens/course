import { useEffect } from "react";

import users from "../../mobx/users";

import UsersItem from "../users-item/users-item";
import Preloader from "../preloader/preloader";
import Pagination from "../common/pagination/pagination";
import { observer } from "mobx-react-lite";

const UsersList: React.FC = observer(() => {
  const {
    pageSize,
    currentPage,
    totalUsersCount,
    usersList,
    status,
    followingInProgress,
    setCurrentPage,
    loadUsers,
  } = users;

  const onSelectPage = (id: number) => {
    setCurrentPage(id);
  };

  useEffect(
    function loadUsersToStore() {
      loadUsers(currentPage, pageSize);
    },
    [currentPage, pageSize, loadUsers]
  );

  if (status === "loading") {
    return <Preloader />;
  }

  return (
    <>
      <Pagination
        onSelectPage={onSelectPage}
        pageInfo={{ pageSize, currentPage, totalItemsCount: totalUsersCount }}
      />
      {usersList.map((user) => (
        <UsersItem
          key={user.id}
          followingInProgress={followingInProgress}
          {...user}
        />
      ))}
    </>
  );
});

export default UsersList;

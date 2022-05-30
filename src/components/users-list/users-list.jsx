import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsers, selectPage, toggleFollow } from "../../store/users/users-action.js";
import { selectUsers } from "../../store/users/users-selector.js";

import UsersItem from "../users-item/users-item.jsx";
import Preloader from "../preloader/preloader.jsx";
import Pagination from "../pagination/pagination.jsx";

const UsersList = () => {
  const dispatch = useDispatch();
  const {pageSize, currentPage, totalUsersCount, users, status} = useSelector(selectUsers)
  const pagesTotal = Math.ceil(totalUsersCount / pageSize);
  const paginations = getPagination(pagesTotal);

  const onSelectPage = (id) => {
    dispatch(selectPage(id));
  }

  useEffect(function loadUsersToStore() {
    dispatch(loadUsers(currentPage, pageSize))
  }, [currentPage, dispatch])
  
  return (
    <>
      {status === "loading" && <Preloader />}
      {paginations.map((pagination, idx) => (
        <Pagination key={idx} currentPage={currentPage} onClick={onSelectPage}>
          {pagination}
        </Pagination>
      ))}
      {users.map((user) => (
        <UsersItem key={user.id} toggleFollow={toggleFollow} {...user} />
      ))}
    </>
  );
};

const getPagination = (pagesTotal) => {
  const pages = [];
  for (let i = 1; i < 6; i++) {
    if (i <= 3) {
      pages.push(i);
    } else if (i === 4) {
      pages.push('...')
    } else {
      pages.push(pagesTotal)
    }
  }
  return pages;
};

export default UsersList;

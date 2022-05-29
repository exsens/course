import UsersItem from "../users-item/users-item.jsx";
import Pagination from "../pagination/pagination.jsx";

const UsersList = ({
  users,
  toggleFollow,
  pageSize,
  totalUsers,
  currentPage,
  onSelectPage,
}) => {
  const pagesTotal = Math.ceil(totalUsers / pageSize);
  const paginations = getPagination(pagesTotal);

  return (
    <>
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

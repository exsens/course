import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import users from '../../mobx/users'
import Pagination from '../common/pagination/pagination'
import Preloader from '../preloader/preloader'
import UsersItem from '../users-item/users-item'

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
    clearUsers,
  } = users

  const onSelectPage = (id: number) => {
    setCurrentPage(id)
  }

  useEffect(
    function loadUsersToStore() {
      loadUsers(currentPage, pageSize)
      return () => clearUsers()
    },
    [currentPage, pageSize, loadUsers, clearUsers],
  )

  if (status === 'loading') {
    return <Preloader />
  }

  return (
    <>
      <Pagination onSelectPage={onSelectPage} pageInfo={{ pageSize, currentPage, totalItemsCount: totalUsersCount }} />
      {usersList.map((user) => (
        <UsersItem key={user.id} followingInProgress={followingInProgress} {...user} />
      ))}
    </>
  )
})

export default UsersList

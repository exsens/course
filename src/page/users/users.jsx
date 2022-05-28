import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserListContainer from "../../components/users-list/users-list-container.jsx"
import { loadUsers } from '../../store/users/users-action.js';

const Users = () => {
  // const dispatch = useDispatch();

  // useEffect(function loadUserData() {
  //   dispatch(loadUsers())

  // }, []);

  return (
    <div style={{ flex: '1' }}>
      <h2>Users</h2>
      <UserListContainer />
    </div>
  )
}

export default Users
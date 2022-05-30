import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAuth } from '../../store/auth/auth-action.js';
import { selectIsAuth } from '../../store/auth/auth-select.js';

import Logo from '../../components/logo/logo';
import Login from '../../components/login/login.jsx';

import c from './header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(function loadAuthData(){
    dispatch(getAuth())
  }, [isAuth, dispatch])

  return (
    <header className={c.header}>
      <Logo />
      <Login isAuth={isAuth}/>
    </header>
  )
}

export default Header;
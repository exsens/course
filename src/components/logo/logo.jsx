import React from 'react';
import { Link } from 'react-router-dom';
import c from './logo.module.scss';

const Logo = () => {
  return (
    <Link to='/profile' className={c.logo}>
    <img src="https://cdn-icons-png.flaticon.com/512/7553/7553022.png"
     alt="logo" />
    </Link>
  )
}

export default Logo
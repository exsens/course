import React from 'react';

import Logo from '../../components/logo/logo';

import c from './header.module.scss';

const Header = () => {
  return (
    <header className={c.header}>
      <Logo />
    </header>
  )
}

export default Header;
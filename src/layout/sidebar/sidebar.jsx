import React from 'react';
import Nav from '../../components/nav/nav';

import c from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={c.sidebar}>
      <Nav />
    </div>
  )
}

export default Sidebar;
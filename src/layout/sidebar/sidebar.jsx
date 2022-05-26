import React from 'react';
import Nav from '../../components/nav/nav';

import c from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={c.sidebar}>
      <Nav />
    </aside>
  )
}




export default Sidebar;
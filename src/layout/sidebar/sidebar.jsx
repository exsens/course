import React from 'react';
import Nav from '../../components/nav/nav';

import c from './sidebar.module.scss'

const Sidebar = ({state}) => {
  return (
    <aside className={c.sidebar}>
      <Nav navigation={state.navigation}/>
    </aside>
  )
}

export default Sidebar;
import React from 'react';

import Sidebar from '../sidebar/sidebar';
import Banner from '../../components/banner/banner';

import c from './content.module.scss';
import Profile from '../../components/profile/profile';

const content = () => {
  return (
    <main>
      <div className={c.inner}>
        <Sidebar />
        <div style={{flex: '1 1 auto'}}>
          <Banner />
          <Profile />
        </div>
      </div>
    </main>
  )
}

export default content
import { Route, Routes } from 'react-router-dom';

import Profile from '../../page/profile/profile.jsx';
import Dialogs from '../../page/dialogs/dialogs.jsx';

import c from './content.module.scss';

const content = ({users, messages}) => {

  return (
    <main className={c.inner}>
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='dialogs/*' element={<Dialogs users={users} messages={messages}/>} />
      </Routes>

    </main>
  )
}

export default content
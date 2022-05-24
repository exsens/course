import { Route, Routes } from 'react-router-dom';

import Profile from '../../page/profile/profile.jsx';
import Dialogs from '../../page/dialogs/dialogs.jsx';

import c from './content.module.scss';
import MessagesItem from '../../components/messages/messages-item/messages-item.jsx';

const content = ({users, messages}) => {

  return (
    <main className={c.inner}>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs/*' element={<Dialogs users={users} messages={messages}/>} />
        {/* <Route path='/dialogs/:id' element={<MessagesItem messages={messages}/>} /> */}
      </Routes>

    </main>
  )
}

export default content
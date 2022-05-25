import { Route, Routes } from 'react-router-dom';

import Profile from '../../page/profile/profile.jsx';
import Dialogs from '../../page/dialogs/dialogs.jsx';

import c from './content.module.scss';

const Content = ({store}) => {

  return (
    <main className={c.inner}>
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='dialogs/*' element={<Dialogs store={store.dialogsData}/>} />
      </Routes>

    </main>
  )
}

export default Content
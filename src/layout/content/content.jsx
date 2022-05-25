import { Route, Routes } from 'react-router-dom';

import Profile from '../../page/profile/profile.jsx';
import Dialogs from '../../page/dialogs/dialogs.jsx';

import c from './content.module.scss';

const Content = ({state, dispatch}) => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route path='profile' element={<Profile state={state.profileData} dispatch={dispatch}/>} />
        <Route path='dialogs/*' element={<Dialogs state={state.dialogsData}/>} />
      </Routes>

    </main>
  )
}

export default Content
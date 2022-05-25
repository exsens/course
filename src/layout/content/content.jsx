import { Route, Routes } from 'react-router-dom';

import Profile from '../../page/profile/profile.jsx';
import Dialogs from '../../page/dialogs/dialogs.jsx';

import c from './content.module.scss';

const Content = ({state, addPost, updateNewPost}) => {
  return (
    <main className={c.inner}>
      <Routes>
        <Route path='profile' element={<Profile state={state.profileData} addPost={addPost} updateNewPost={updateNewPost}/>} />
        <Route path='dialogs/*' element={<Dialogs state={state.dialogsData}/>} />
      </Routes>

    </main>
  )
}

export default Content
import {addPost, updatePost} from '../../store/profile/profile-action.js'
import { useDispatch } from 'react-redux';

import c from './profile-form.module.scss';
import { useState } from 'react';

const ProfileForm = () => {
  const [inputPost, setInputPost] = useState('');

  const dispatch = useDispatch();

  const handleBlur = (e) => {
    const value = e.target.value;
    dispatch(addPost(value));
    setInputPost('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputPost(value);
  };

  return (
    <div className={c.profile_form}>
      <h3>My posts</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputPost}
        />
      </form>
    </div>

  )
}

export default ProfileForm;
import { addPostAction, updatePostAction } from '../../../store/profile/profile-action.js';

import ProfileForm from './profile-form.jsx'

const ProfileformContainer = ({ newPost, dispatch }) => {

  const addPost = () => {
    dispatch(addPostAction())
  }

  const updatePost = (value) => {
    dispatch(updatePostAction(value))
  }

  return (
    <ProfileForm newPost={newPost} addPost={addPost} updatePost={updatePost}/>
  )
};

export default ProfileformContainer
import PostList from "./post-list/posts-list.jsx"
import ProfileContent from './profile-content/profile-content.jsx'
import ProfileForm from "./profile-form/profile-form.jsx"

import c from './profile.module.scss'

const Profile = () => {
  return (
    <div className={c.profile}>
      <ProfileContent />
      <ProfileForm />
      <PostList />
    </div>
  )
}

export default Profile
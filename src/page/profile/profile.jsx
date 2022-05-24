import Banner from '../../components/banner/banner'
import PostList from './post-list/posts-list'
import ProfileContent from './profile-content/profile-content'
import ProfileForm from './profile-form/profile-form.jsx'

import c from './profile.module.scss'

const Profile = () => {
  return (
    <div className={c.profile}>
      <Banner />
      <ProfileContent />
      <ProfileForm />
      <PostList />
    </div>
  )
}

export default Profile
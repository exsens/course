import Banner from '../../components/banner/banner'
import PostList from './post-list/posts-list'
import ProfileContent from './profile-content/profile-content'
import ProfileForm from './profile-form/profile-form.jsx'

import c from './profile.module.scss'

const Profile = ({state, dispatch}) => {
  const {profileInfo, posts, newPost} = state;
  return (
    <div className={c.profile}>
      <Banner banner={profileInfo.banner}/>
      <ProfileContent profileInfo={profileInfo}/>
      <ProfileForm dispatch={dispatch} newPost={newPost}/>
      <PostList postsData={posts}/>
    </div>
  )
}

export default Profile
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import PostForm from '../../components/forms/post-form/post-form'
import PostList from '../../components/post-list/posts-list'
import Preloader from '../../components/preloader/preloader'
import ProfileInfo from '../../components/profile-info/profile-info'
import auth from '../../mobx/auth'
import profile from '../../mobx/profile'
import c from './profile.module.scss'

const Profile = observer(() => {
  const { userId } = auth
  const { posts, profileInfo, status, loadProfile, clearProfile } = profile
  const id = useParams().id || userId
  const isOwner = userId === id

  useEffect(() => {
    loadProfile(id)
    return () => clearProfile()
  }, [id, userId, loadProfile, clearProfile])

  if (status === 'loading') {
    return <Preloader />
  }

  if (status === 'serverError') {
    return <p>Server Error</p>
  }
  return (
    <div className={c.profile}>
      <ProfileInfo isOwner={isOwner} />
      <h3>My posts</h3>
      {isOwner && <PostForm />}
      <PostList postsData={posts} avatar={profileInfo?.photos?.small} />
    </div>
  )
})

export default Profile

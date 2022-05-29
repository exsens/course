import Banner from '../../components/banner/banner'
import PostList from '../../components/post-list/posts-list'
import ProfileContent from '../../components/profile-content/profile-content'
import ProfileForm from '../../components/profile-form/profile-form'
import { connect } from 'react-redux'
import { addPostAction, updatePostAction } from '../../store/profile/profile-action.js';

import c from './profile.module.scss'
import { useParams } from 'react-router-dom'

const Profile = (state) => {
  const id = useParams()
  console.log(id)

  const {profileInfo, posts, newPost, addPost, updatePost} = state;
  return (
    <div className={c.profile}>
      <Banner banner={profileInfo.banner}/>
      <ProfileContent profileInfo={profileInfo}/>
      <ProfileForm newPost={newPost} addPost={addPost} updatePost={updatePost}/>
      <PostList postsData={posts}/>
    </div>
  )
};

const mapStateToProps = ({profileData}) => {
  return {
    profileInfo: profileData.profileInfo,
    posts: profileData.posts,
    newPost: profileData.newPost,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAction())
    },
    updatePost: (value) => {
      dispatch(updatePostAction(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
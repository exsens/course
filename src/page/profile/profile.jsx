import Banner from '../../components/banner/banner'
import PostList from './post-list/posts-list'
import ProfileContent from './profile-content/profile-content'
import ProfileForm from './profile-form/profile-form.jsx'
import { connect } from 'react-redux'
import { addPostAction, updatePostAction } from '../../store/profile/profile-action.js';

import c from './profile.module.scss'

const Profile = (state) => {
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
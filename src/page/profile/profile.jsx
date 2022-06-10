import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUserId } from "../../store/auth/auth-select";
import { selectProfileData } from "../../store/profile/profile-selector";
import { getStatus, loadProfile } from "../../store/profile/profile-thunk";

import PostList from "../../components/post-list/posts-list";
import ProfileInfo from "../../components/profile-info/profile-info";
import PostForm from "../../components/forms/post-form/post-form";
import Preloader from "../../components/preloader/preloader";

import c from "./profile.module.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfileData);
  const userId = useSelector(selectUserId);
  const { posts, profileInfo, status } = profile;
  const id = useParams().id || userId;
  const isOwner = userId === id;

  useEffect(
    function loadProfileInfo() {
      dispatch(loadProfile(id));
    },
    [id, dispatch]
  );

  useEffect(
    function loadStatus() {
      dispatch(getStatus(id));
    },

    [id, dispatch]
  );

  if (status === "loading" ) {
    return <Preloader />
  }
  
  return (
    <div className={c.profile}>
      
      <ProfileInfo isOwner={isOwner} />
      <h3>My posts</h3>
      {isOwner && <PostForm />}
      <PostList postsData={posts} avatar={profileInfo?.photos?.small} />
    </div>
  );
};

export default Profile;

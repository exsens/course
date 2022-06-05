import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileData } from "../../store/profile/profile-selector.js";
import {
  getStatus,
  loadProfile,
  addPost,
} from "../../store/profile/profile-action.js";

import Banner from "../../components/banner/banner";
import PostList from "../../components/post-list/posts-list";
import ProfileContent from "../../components/profile-content/profile-content";
import PostForm from "../../components/forms/post-form/post-form";
import Preloader from "../../components/preloader/preloader.jsx";

import c from "./profile.module.scss";
import { selectUserId } from "../../store/auth/auth-select.js";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfileData);
  const userId = useSelector(selectUserId);
  const { posts, profileInfo, status } = profile;
  const id = useParams().id || userId;
  const isSelfUser = userId === id;

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
  return (
    <div className={c.profile}>
      {status === "loading" && <Preloader />}
      {/* <Banner banner={profileInfo.banner}/> */}
      <ProfileContent
        profileInfo={{ ...profileInfo, id }}
        isSelfUser={isSelfUser}
      />
      <h3>My posts</h3>
      {isSelfUser && <PostForm />}
      <PostList postsData={posts} avatar={profileInfo.photos?.small} />
    </div>
  );
};

export default Profile;

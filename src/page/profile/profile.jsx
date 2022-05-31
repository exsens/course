import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileData } from "../../store/profile/profile-selector.js";
import { getStatus, loadProfile } from "../../store/profile/profile-action.js";

import Banner from "../../components/banner/banner";
import PostList from "../../components/post-list/posts-list";
import ProfileContent from "../../components/profile-content/profile-content";
import ProfileForm from "../../components/profile-form/profile-form";
import Preloader from "../../components/preloader/preloader.jsx";

import c from "./profile.module.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfileData);
  const { posts, profileInfo, status } = profile;
  const { id = 24252 } = useParams();

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
      <ProfileContent profileInfo={profileInfo} />
      <ProfileForm />
      <PostList postsData={posts} />
    </div>
  );
};

export default Profile;

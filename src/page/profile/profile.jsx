import { useParams } from "react-router-dom";
import { useEffect } from "react";

import profile from "../../mobx/profile";
import auth from "../../mobx/auth";

import PostList from "../../components/post-list/posts-list";
import ProfileInfo from "../../components/profile-info/profile-info";
import PostForm from "../../components/forms/post-form/post-form";
import Preloader from "../../components/preloader/preloader";

import c from "./profile.module.scss";
import { observer } from "mobx-react-lite";

const Profile = observer(() => {
  const { userId } = auth;
  const { posts, profileInfo, status, loadProfile, getStatus } = profile;
  const id = useParams().id || userId;
  const isOwner = userId === id;

  useEffect(
    function loadProfileInfo() {
      loadProfile(id);
      getStatus(id);
    },
    [id]
  );

  if (status === "loading") {
    return <Preloader />;
  }

  console.log(profileInfo.status);

  return (
    <div className={c.profile}>
      <ProfileInfo isOwner={isOwner} />
      <h3>My posts</h3>
      {isOwner && <PostForm />}
      <PostList postsData={posts} avatar={profileInfo?.photos?.small} />
    </div>
  );
});

export default Profile;

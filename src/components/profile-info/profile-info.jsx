import profile from "../../mobx/profile";

import ProfileAvatar from "../profile-avatar/profile-avatar";
import ProfileStatus from "../profile-status/profile-status";
import ProfileActions from "../profile-actions/profile-actions.jsx";

import c from "./profile-info.module.scss";

const ProfileInfo = ({ isOwner }) => {
  const { profileInfo } = profile;

  return (
    <div>
      <div>
        <h2 className={c.name}>{profileInfo.fullName}</h2>
        {isOwner ? (
          <ProfileStatus status={profileInfo.status} isOwner={isOwner} />
        ) : (
          <p>{profileInfo.status}</p>
        )}
      </div>
      <ProfileAvatar
        src={profileInfo.photos?.small}
        width={"100px"}
        height={"100px"}
      />
      <ProfileActions profileInfo={profileInfo} isOwner={isOwner} />
    </div>
  );
};

export default ProfileInfo;

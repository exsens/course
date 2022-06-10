import { useSelector } from "react-redux";

import ProfileActions from "../profile-actions/profile-actions";
import ProfileStatus from "../profile-status/profile-status";
import { selectProfileInfo } from "../../store/profile/profile-selector";

import c from "./profile-info.module.scss";
import ProfileAvatar from "../profile-avatar/profile-avatar.jsx";

const ProfileInfo = ({ isOwner }) => {
  const profileInfo = useSelector(selectProfileInfo)

  return (
    <div>
      <div>
        <h2 className={c.name}>{profileInfo.fullName}</h2>
        {isOwner ? <ProfileStatus status={profileInfo.status} isOwner={isOwner}/> : <p>{profileInfo.status}</p>}
      </div>
      <ProfileAvatar src={profileInfo.photos?.small} width={'100px'} height={'100px'} />
      <ProfileActions profileInfo={profileInfo} isOwner={isOwner}/>
    </div>
  );
};

export default ProfileInfo;

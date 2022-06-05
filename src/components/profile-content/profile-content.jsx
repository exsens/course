import ProfileActions from "../profile-actions/profile-actions.jsx";
import ProfileStatus from "../profile-status/profile-status.jsx";
import c from "./profile-content.module.scss";

const ProfileContent = ({ profileInfo, isSelfUser }) => {
  return (
    <div>
      <div className={c.profile__info}>
        <h2 className={c.profile__name}>{profileInfo.fullName}</h2>
        <ProfileStatus status={profileInfo.status} isSelfUser={isSelfUser}/>
      </div>
      <div className={c.profile_content__img}>
        <img
          src={
            profileInfo.photos?.small ||
            "https://yur-info.ru/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg"
          }
          alt="dog"
          width="50"
          height="50"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <ProfileActions profileInfo={profileInfo} isSelfUser={isSelfUser}/>
    </div>
  );
};

export default ProfileContent;

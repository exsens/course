import { useDispatch, useSelector } from "react-redux";

import { selectIsAuth } from "../../store/auth/auth-select.js";
import { loadUserAvatar } from "../../store/profile/profile-action.js";
// import Description from "../description/description.jsx";
import ProfileStatus from "../profile-status/profile-status.jsx";
import c from "./profile-content.module.scss";

const ProfileContent = ({ id, profileInfo }) => {
  const dispatch = useDispatch();
  const { fullName, photos, info, status, userId } = profileInfo;

  const handleChangeAvatar = (e) => {
    if (e.target.files.length) {
      dispatch(loadUserAvatar(e.target.files[0]));
    }
  };

  return (
    <div>
      <div className={c.profile__info}>
        <h2 className={c.profile__name}>{fullName}</h2>
        <ProfileStatus status={status} />
        {/* <Description info={info} /> */}
      </div>
      <div className={c.profile_content__img_control}>
        <img
          src={
            photos?.small ||
            "https://yur-info.ru/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg"
          }
          alt="dog"
          width="50"
          height="50"
          style={{ width: "100px", height: "100px" }}
        />
        {id === userId && <input type="file" onChange={handleChangeAvatar} />}
      </div>
    </div>
  );
};

export default ProfileContent;

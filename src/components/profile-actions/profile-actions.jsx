import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadUserAvatar,
  updateProfileInfo,
} from "../../store/profile/profile-thunk";

import Button from "../common/button/button";
import Description from "../description/description";
import ProfileForm from "../forms/profile-form/profile-form";

const ProfileActions = ({ profileInfo, isSelfUser }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const {
    userId,
    contacts = {},
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
    fullName,
  } = profileInfo;

  const profileData = {
    ...contacts,
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
  };

  const profileDescriptions = Object.entries(profileData).map((descr) => {
    return {
      title: descr[0],
      info: descr[1],
    };
  });

  const handleChangeAvatar = (e) => {
    if (e.target.files.length) {
      dispatch(loadUserAvatar(e.target.files[0]));
    }
  };

  const handleSubmitForm = ({
    github,
    vk,
    facebook,
    instagram,
    twitter,
    website,
    youtube,
    mainLink,
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
  }) => {
    const data = {
      userId,
      lookingForAJob: Boolean(lookingForAJob),
      lookingForAJobDescription,
      fullName,
      aboutMe,
      contacts: {
        github,
        vk,
        facebook,
        instagram,
        twitter,
        website,
        youtube,
        mainLink,
      },
    };
    dispatch(updateProfileInfo(data)).then(() => setEditMode(!editMode));
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {isSelfUser && <input type="file" onChange={handleChangeAvatar} />}
      {editMode && isSelfUser ? (
        <ProfileForm fields={profileDescriptions} onSubmit={handleSubmitForm} />
      ) : (
        <>
          <Description info={profileDescriptions} />
          {isSelfUser && <Button onClick={handleToggleEditMode}>Edit</Button>}
        </>
      )}
    </div>
  );
};

export default ProfileActions;

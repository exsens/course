import { useState } from 'react'
import profile from '../../mobx/profile'
import Button from '../common/button/button'
import Description from '../description/description'
import ProfileForm from '../forms/profile-form/profile-form'

const ProfileActions = ({ profileInfo, isOwner }) => {
  const { loadUserAvatar, updateProfileInfo } = profile
  const [editMode, setEditMode] = useState(false)
  const { userId, contacts = {}, lookingForAJob, lookingForAJobDescription, aboutMe, fullName } = profileInfo

  const profileData = {
    ...contacts,
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
  }

  const profileDescriptions = Object.entries(profileData).map((descr) => {
    return {
      title: descr[0],
      info: descr[1],
    }
  })

  const handleChangeAvatar = (e) => {
    if (e.target.files.length) {
      loadUserAvatar(e.target.files[0])
    }
  }

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
    }
    updateProfileInfo(data).then(() => setEditMode(!editMode))
  }

  const handleToggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      {isOwner && <input type="file" onChange={handleChangeAvatar} />}
      {editMode && isOwner ? (
        <ProfileForm fields={profileDescriptions} onSubmit={handleSubmitForm} />
      ) : (
        <>
          <Description info={profileDescriptions} />
          {isOwner && <Button onClick={handleToggleEditMode}>Edit</Button>}
        </>
      )}
    </div>
  )
}

export default ProfileActions

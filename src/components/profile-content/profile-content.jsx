import Description from '../description/description.jsx'
import ProfileStatus from '../profile-status/profile-status.jsx';
import c from './profile-content.module.scss';

const ProfileContent = ({profileInfo}) => {
  const {fullName, avatar, info} = profileInfo;

  return (
    <div className={c.profile_content__inner}>
      <div className={c.profile_content__img}>
        <img
          src={avatar || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg'}
          alt="dog"
          width="50"
          height="50"
          style={{ width: '100px', height: '100px' }} />
      </div>
      <div className={c.profile__info}>
        <h2 className={c.profile__name}>{fullName}</h2>
        <ProfileStatus />
        {/* <Description info={info} /> */}
      </div>
    </div>
  )
}

export default ProfileContent;
import c from './profile-content.module.scss';
import Description from '../../../components/description/description'

const ProfileContent = ({profileInfo}) => {
  const {name, info, avatar} = profileInfo;

  return (
    <div className={c.profile_content__inner}>
      <div className={c.profile_content__img}>
        <img
          src={avatar}
          alt="dog"
          width="50"
          height="50"
          style={{ width: '100px', height: '100px' }} />
      </div>
      <div className={c.profile__info}>
        <h2 className={c.profile__name}>{name}</h2>
        <Description info={info} />
      </div>
    </div>
  )
}

export default ProfileContent;
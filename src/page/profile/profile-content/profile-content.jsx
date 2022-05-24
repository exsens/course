import c from './profile-content.module.scss';
import Description from '../../../components/description/description'

const ProfileContent = () => {
  const info = [
    { title: 'Date of Birth', info: '19.02.1956' },
    { title: 'City', info: 'Minsk' },
    { title: 'Education', info: 'SU 11' },
    { title: 'ebsite', info: 'www.www.ru' },
  ];

  return (
    <div className={c.profile_content__inner}>
      <div className={c.profile_content__img}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg"
          alt="dog"
          width="50"
          height="50"
          style={{ width: '100px', height: '100px' }} />
      </div>
      <div className={c.profile__info}>
        <h2 className={c.profile__name}>Dmitry K</h2>
        <Description info={info} />
      </div>
    </div>
  )
}

export default ProfileContent;
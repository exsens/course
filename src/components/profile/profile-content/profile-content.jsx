import c from './profile-content.module.scss';
import Description from '../../description/description'

const ProfileContent = () => {
  return (
    <div className={c.profile__inner}>
    <div className={c.profile__img}>
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg" 
      alt="dog" 
      width="50" 
      height="50" 
      style={{width: '100px', height: '100px'}}/>
    </div>
    <div className={c.profile__info}>
      <h2 className={c.profile__name}>Dmitry K</h2>
     <Description />
    </div>
  </div>
  )
}

export default ProfileContent;
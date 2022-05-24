import Description from "../description/description"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__img">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg" 
          alt="dog" 
          width="50" 
          height="50" 
          style={{width: '50px', height: '50px'}}/>
        </div>
        <div className="profile__info">
          <h2 className="profile__name">Dmitry K</h2>
         <Description />
        </div>
      </div>
    </div>
  )
}

export default Profile
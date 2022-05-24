import c from './profile-form.module.scss';

const ProfileForm = () => {
  return (
    <div className={c.profile_form}>
      <h3>My posts</h3>
      <form>
        <input type="text" />
        <button>send </button>
      </form>
    </div>

  )
}

export default ProfileForm;
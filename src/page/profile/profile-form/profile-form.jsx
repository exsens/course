import c from './profile-form.module.scss';

const ProfileForm = ({ addPost, newPost, updateNewPost }) => {
  const handleBlur = (e) => {
    const value = e.target.value;
    addPost(value)
    updateNewPost('')
  }

  const handleChange = (e) => {
    const value = e.target.value;
    updateNewPost(value);
  }

  return (
    <div className={c.profile_form}>
      <h3>My posts</h3>
      <form>
        <input
          type="text"
          value={newPost}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
    </div>

  )
}

export default ProfileForm;
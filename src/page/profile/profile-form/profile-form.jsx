import c from './profile-form.module.scss';

const ProfileForm = ({ newPost, addPost, updatePost }) => {
  const handleBlur = () => {
    addPost();
    updatePost('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    updatePost(value);
  };

  return (
    <div className={c.profile_form}>
      <h3>My posts</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
    </div>

  )
}

export default ProfileForm;
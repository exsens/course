import c from './profile-form.module.scss';

const ProfileForm = ({ newPost, dispatch }) => {
  const handleBlur = () => {
    dispatch({type: 'ADD_POST'})
  }

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({type: 'UPDATE_NEW_POST', payload: value});
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
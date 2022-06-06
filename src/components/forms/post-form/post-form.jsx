import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../../../store/profile/profile-action";

import c from "./post-form.module.scss";

const PostForm = () => {
  const [inputPost, setInputPost] = useState("");

  const dispatch = useDispatch();

  const handleBlur = (e) => {
    const value = e.target.value;

    if (value.length > 0) {
      dispatch(addPost(value));
      setInputPost("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputPost(value);
  };

  return (
    <form className={c.profile_form}>
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputPost}
        type="text"
        name="addPost"
      />
    </form>
  );
};

export default PostForm;

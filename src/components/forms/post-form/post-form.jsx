import { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { addPost, updatePost } from "../../../store/profile/profile-action.js";

import c from "./post-form.module.scss";

const PostForm = ({ onBlur }) => {
  // const [inputPost, setInputPost] = useState('');

  // const dispatch = useDispatch();

  // const handleBlur = (e) => {
  //   const value = e.target.value;
  //   dispatch(addPost(value));
  //   setInputPost('');
  // };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setInputPost(value);
  // };

  return (
    <form className={c.profile_form}>
      <Field onBlur={onBlur} component="input" type="text" name="addPost" />
    </form>
  );
};

export default reduxForm({ form: "posts" })(PostForm);

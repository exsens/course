import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import {addPost, updatePost} from '../../../store/profile/profile-action.js'

import c from './profile-form.module.scss';

const ProfileForm = ({onBlur}) => {
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
    <div className={c.profile_form}>
      <form>
      <Field component='input' type="text" name="addPost"/>
      </form>
    </div>

  )
}

export default reduxForm({form: 'posts'})(ProfileForm);
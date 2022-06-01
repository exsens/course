import React from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/form-controls/form-controls.jsx";
import { required, maxLength, minLength } from "../../../validation/validation.js";

import Button from "../../common/button/button.jsx";

import c from "./login-form.module.scss";



const LoginForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form className={c.form} onSubmit={handleSubmit} >
      <Field
        className={c.input}
        name="email"
        component={Input}
        type="text"
        warn={required}
        placeholder="email?"
        validate={[required]}
      />
      <Field
        className={c.input}
        name="password"
        component={Input}
        type="password"
        placeholder="password?"
        validate={[required, minLength5]}
      />
      <label className={c.checkbox_label} htmlFor="remember">
        <Field name="remember" component="input" type="checkbox" />
        <span>remember me?</span>
      </label>
      <Button>Sign in</Button>
    </form>
  );
};

const minLength5 = minLength(5)

export default reduxForm({
  form: "login",
})(LoginForm);

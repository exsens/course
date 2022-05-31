import React from "react";
import Button from "../../button/button.jsx";
import { Field, reduxForm } from "redux-form";

import c from "./login-form.module.scss";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className={c.form} onSubmit={handleSubmit}>
      <Field
        className={c.input}
        name="login"
        component="input"
        type="text"
        placeholder="Login?"
      />
      <Field
        className={c.input}
        name="password"
        component="input"
        type="password"
        placeholder="Password?"
      />
      <label className={c.checkbox_label} htmlFor="remember">
        <Field name="remember" component="input" type="checkbox" />
        <span>remember me?</span>
      </label>
      <Button>Sign in</Button>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);

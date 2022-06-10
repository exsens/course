import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { Input } from "../../common/form-controls/form-controls";
import { required, minLength } from "../../../utils/validation/validation";

import Button from "../../common/button/button";

import c from "./login-form.module.scss";

interface LoginFormPropsType {
  error?: string;
  handleSubmit: () => void;
}

interface LoginFormOwnProps {
  captchaUrl: string | null;
}

const LoginForm: React.FC<
  InjectedFormProps<LoginFormPropsType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl = null }) => {
  return (
    <form className={c.form} onSubmit={handleSubmit}>
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
      {error && <p className={c.error}>{error}</p>}
      {captchaUrl && (
        <>
          <img
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            src={captchaUrl}
            alt="captcha"
          />
          <Field
            className={c.input}
            name="captcha"
            component={Input}
            type="text"
            placeholder="Captcha?"
          />
        </>
      )}
    </form>
  );
};

const minLength5 = minLength(5);

export default reduxForm<LoginFormPropsType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

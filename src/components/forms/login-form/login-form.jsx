import { observer } from "mobx-react-lite";
import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../mobx/auth";

import Button from "../../common/button/button";

import c from "./login-form.module.scss";

export const LoginForm = observer(({ onSubmit }) => {
  const { error, captchaUrl } = auth;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  return (
    <form className={c.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={c.input}
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
        type="text"
        placeholder="email?"
      />
      {errors.email?.type === "required" && (
        <span className={c.error}>This is required</span>
      )}
      {errors.email?.type === "minLength" && (
        <span className={c.error}>Min symbols 3</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className={c.error}>
          Entered value does not match email forma
        </span>
      )}

      <input
        className={c.input}
        {...register("password", { minLength: 2 })}
        type="password"
        placeholder="password?"
      />
      <label className={c.checkbox_label} htmlFor="remember">
        <input {...register("remember")} type="checkbox" />
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
          <input
            {...register("captcha")}
            className={c.input}
            type="text"
            placeholder="Captcha?"
          />
        </>
      )}
    </form>
  );
});

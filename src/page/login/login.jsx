import { observer } from "mobx-react-lite";
import { useLocation, Navigate } from "react-router-dom";

import auth from "../../mobx/auth";

import { LoginForm } from "../../components/forms/login-form/login-form";

import c from "./login.module.scss";

const Login = observer(() => {
  const { isAuth, captchaUrl, logIn } = auth;
  const location = useLocation().state?.from?.pathname;

  const handleSubmit = ({ email, password, rememberMe, captcha = null }) => {
    logIn(email, password, rememberMe, captcha);
  };

  if (isAuth) {
    return <Navigate to={location || "/profile"} />;
  }


  return (
    <div className={c.login}>
      <LoginForm onSubmit={handleSubmit} captchaUrl={captchaUrl} />
    </div>
  );
});

export default Login;

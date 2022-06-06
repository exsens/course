import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

import LoginForm from "../../components/forms/login-form/login-form";
import { logIn } from "../../store/auth/auth-action";
import { selectAuthData } from "../../store/auth/auth-select";

import c from "./login.module.scss";

const Login = () => {
  const location = useLocation().state?.from?.pathname;
  const dispatch = useDispatch();
  const { isAuth, captchaUrl } = useSelector(selectAuthData);

  const handleSubmit = ({ email, password, rememberMe, captcha = null }) => {
    dispatch(logIn(email, password, rememberMe, captcha));
  };

  if (isAuth) {
    return <Navigate to={location || "/profile"} />;
  }

  return (
    <div className={c.login}>
      <LoginForm onSubmit={handleSubmit} captchaUrl={captchaUrl}/>
    </div>
  );
};

export default Login;

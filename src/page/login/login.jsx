import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

import LoginForm from "../../components/forms/login-form/login-form.jsx";
import { logIn } from "../../store/auth/auth-action.js";
import { selectIsAuth } from "../../store/auth/auth-select.js";

import c from "./login.module.scss";

const Login = () => {
  const location = useLocation().state?.from?.pathname;
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleSubmit = ({ email, password, rememberMe, captcha}) => {
    dispatch(logIn(email, password, rememberMe, captcha));
  };

  if (isAuth) {
    return <Navigate to={location || "/profile"} />;
  }

  return (
    <div className={c.login}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;

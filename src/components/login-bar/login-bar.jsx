import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectIsAuth } from "../../store/auth/auth-select.js";
import { logOut } from "../../store/auth/auth-action.js"


const LoginBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <>{!isAuth ? <Link to="/login">Login</Link> : <button onClick={handleLogOut}>Quit</button>}</>
  );
};

export default LoginBar;
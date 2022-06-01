import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/auth/auth-action.js"

const LoginBar = ({ isAuth }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <>{!isAuth ? <Link to="/login">Login</Link> : <button onClick={handleLogOut}>Quit</button>}</>
  );
};

export default LoginBar;

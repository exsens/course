import { Link } from "react-router-dom";

const LoginBar = ({ isAuth }) => {
  return (
    <>{!isAuth ? <Link to="/login">Login</Link> : <span>Quit</span>}</>
  );
};

export default LoginBar;

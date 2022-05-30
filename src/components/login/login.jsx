import { Link } from "react-router-dom";

const Login = ({ isAuth }) => {
  return (
    <>{!isAuth ? <Link to="/login">Login</Link> : <span>Quit</span>}</>
  );
};

export default Login;

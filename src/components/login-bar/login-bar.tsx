import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedDispatch } from "../../hooks/useAppDispatch";

import { selectIsAuth } from "../../store/auth/auth-select";
import { logOut } from "../../store/auth/auth-thunk";

const LoginBar: React.FC = () => {
  const dispatch = useTypedDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogOut}>Quit</button>
      )}
    </>
  );
};

export default LoginBar;

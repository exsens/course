import { observer } from "mobx-react-lite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedDispatch } from "../../hooks/useAppDispatch";
import auth from "../../mobx/auth";

import { selectIsAuth } from "../../store/auth/auth-select";
import { logOut } from "../../store/auth/auth-thunk";

const LoginBar: React.FC = observer(() => {
  const { isAuth, logOut } = auth;

  const handleLogOut = () => {
    logOut();
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
});

export default LoginBar;

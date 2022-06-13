import auth from "../mobx/auth";
import { Navigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

const WithRequireAuth = observer(({ children }) => {
  const location = useLocation();
  const { isAuth } = auth;

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
});

export default WithRequireAuth;

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuth } from "../store/auth/auth-select.js";

const WithRequireAuth = ({ children }) => {
  const auth = useSelector(selectIsAuth);
  const location = useLocation();

  // if (!auth) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  return children;
};

export default WithRequireAuth;

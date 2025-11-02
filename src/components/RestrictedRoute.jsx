import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? <Navigate to={`/`} replace /> : children;
};

export default RestrictedRoute;

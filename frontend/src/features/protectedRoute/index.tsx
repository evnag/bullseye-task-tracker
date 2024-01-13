import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "../../app/services/authService";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = getCurrentUser();
  const location = useLocation();

  return user !== null ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

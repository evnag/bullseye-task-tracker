import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userApi } from "./userApi";
import { useCookies } from "react-cookie";

const RequireUser = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const [cookies] = useCookies(["logged_in"]);
  const location = useLocation();
  const logged_in = cookies.logged_in;

  const { data: user } = userApi.endpoints.getMe.useQuery(null, {
    skip: !logged_in,
  });

  if (logged_in && !user) {
    return <div>Loading</div>;
  }

  return logged_in && allowedRoles.includes(user?.role as string) ? (
    <Outlet />
  ) : logged_in && user ? (
    <Navigate to="/401" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireUser;

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userLogout } from "../../app/services/authService";

interface Props {}

export default function Logout({}: Props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    userLogout().then(() => {
      setState(true);
    });
  }, []);

  return state ? <Navigate to="/login"></Navigate> : <div>Logging out...</div>;
}

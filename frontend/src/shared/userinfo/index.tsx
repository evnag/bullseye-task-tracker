import { Link } from "react-router-dom";
import { UserProfileProps } from "../../entities/userProfile/model";
import "./userinfo.css";
import { cn } from "@bem-react/classname";

export interface UserInfoProps {
  user: UserProfileProps;
}

export default function UserInfo({ user }: UserInfoProps) {
  const userInfo = cn("user-info");

  return (
    <div className={userInfo()}>
      <ul>
        <li>
          <a href="#">{user.username}</a>
        </li>
        <li>{user.role}</li>
        <li>
          <Link to={"/logout"}>Выйти из учетной записи</Link>
        </li>
      </ul>
    </div>
  );
}

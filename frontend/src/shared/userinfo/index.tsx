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
          <a href="#">{user.email}</a>
        </li>
        <li>{user.role}</li>
        <li>
          <a href="#">Выйти из учетной записи</a>
        </li>
      </ul>
    </div>
  );
}

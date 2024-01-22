import "./userpic.css";
import { UserProfileProps } from "../../entities/userProfile/model";
import { cn } from "@bem-react/classname";
import user_svg from "/src/assets/user_logo.svg"

export interface UserPicProps {
  showUser: boolean;
  profile?: UserProfileProps;
}

export default function UserPic({ showUser, profile }: UserPicProps) {
  if (!profile) return null;

  if (showUser) {
    const userpic = cn("userpic");

    return (
      <div className={userpic()}>
        <div className={userpic("avatar")}>
          <img src={profile.avatar || user_svg} alt="Аватарка" />
        </div>
        <div className="name">
          <div className="name first_name">{profile.firstName}</div>
          <div className="name last_name">{profile.lastName}</div>
        </div>
      </div>
    );
  }

  return <div className="userpic name">{profile.firstName}</div>;
}

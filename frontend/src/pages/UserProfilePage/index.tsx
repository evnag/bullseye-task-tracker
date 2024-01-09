import { getCurrentUser } from "../../app/services/authService";
// import { UserProfileProps, UserRole } from "../../entities/userProfile/model";
import Dashboard from "../../shared/dashboard";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import NavMenu from "../../shared/nav-menu";
import UserInfo from "../../shared/userinfo";
import UserPic from "../../shared/userpic";

interface Props {}

export default function UserProfilePage({}: Props) {
  // let prof: UserProfileProps;
  // prof = {
  //   firstName: "Евгений",
  //   lastName: "Нагичев",
  //   email: "ev.nag@example.com",
  //   role: UserRole.ADMIN,
  // };

  const currentUser = getCurrentUser();

  return (
    <>
      <Header>
        <Logo color="icon-green" small></Logo>
        <UserPic profile={currentUser} showUser></UserPic>
      </Header>
      <Dashboard>
        <NavMenu></NavMenu>
        <UserInfo user={currentUser}></UserInfo>
      </Dashboard>
      {/* <UserPage></UserPage> */}
    </>
  );
}

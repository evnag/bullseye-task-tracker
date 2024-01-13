import { getCurrentUser } from "../../app/services/authService";
// import { UserProfileProps, UserRole } from "../../entities/userProfile/model";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import Search from "../../shared/search";
import UserPic from "../../shared/userpic";

interface Props {}

export default function TaskSearchPage({}: Props) {
  // let prof: UserProfileProps;
  // prof = {
  //   firstName: "Евгений",
  //   lastName: "Нагичев",
  //   username: "ev.nag@example.com",
  //   role: UserRole.ADMIN,
  // };

  const currentUser = getCurrentUser();

  return (
    <>
      <Header>
        <Logo color="icon-green" small></Logo>
        <UserPic profile={currentUser} showUser></UserPic>
      </Header>
      <Search></Search>
    </>
  );
}

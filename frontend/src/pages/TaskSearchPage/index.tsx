import { UserProfileProps, UserRole } from "../../entities/userProfile/model";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import Search from "../../shared/search";
import UserPic from "../../shared/userpic";

interface Props {}

export default function TaskSearchPage({}: Props) {
  let prof: UserProfileProps;
  prof = {
    firstName: "Евгений",
    lastName: "Нагичев",
    email: "ev.nag@example.com",
    role: UserRole.ADMIN,
  };

  return (
    <>
      <Header>
        <Logo color="icon-green" small></Logo>
        <UserPic profile={prof} showUser></UserPic>
      </Header>
      <Search></Search>
    </>
  );
}

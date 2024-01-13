import Header from "../../shared/header";
import Login from "../../shared/login";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";

interface Props {}

export default function LoginPage({}: Props) {
  return (
    <>
      <Header>
        <Logo color="icon-green" small={false}></Logo>
        <UserPic showUser={false} profile={undefined}></UserPic>
      </Header>
      <Login></Login>
    </>
  );
}

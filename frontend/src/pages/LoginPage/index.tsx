import Login from "../../shared/login";
import Logo from "../../shared/logo";

interface Props {}

export default function LoginPage({}: Props) {
  return (
    <>
      <Logo color="icon-green" small={false}></Logo>
      <Login></Login>
    </>
  );
}

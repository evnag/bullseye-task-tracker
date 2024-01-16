import Header from "../../shared/header";
import Logo from "../../shared/logo";
import Search from "../../shared/search";
import UserPic from "../../shared/userpic";

interface Props {}

export default function TaskSearchPage({}: Props) {

  return (
    <>
      <Header>
        <Logo color="icon-green" small></Logo>
        <UserPic profile={undefined} showUser></UserPic>
      </Header>
      <Search></Search>  
    </>
  );
}

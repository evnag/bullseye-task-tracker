import "./App.css";
import Header from "../shared/header";
import Logo from "../shared/logo";
import UserPic from "../shared/userpic";
import Dashboard from "../shared/dashboard";
import ManagementList from "../shared/management_list";
import { UserProfileProps, UserRole } from "../entities/userProfile/model";
import UserInfo from "../shared/userinfo";

function App() {
  let prof: UserProfileProps;
  prof = {
    firstName: "firstName",
    lastName: "lastName",
    email: "ev.nag@example.com",
    role: UserRole.ADMIN,
  };

  return (
    <>
      <Header>
        <Logo color="icon-green" small></Logo>
        <UserPic profile={prof} showUser></UserPic>
      </Header>
      <Dashboard>
        <ManagementList title={""} link={""}></ManagementList>
        <UserInfo user={prof}></UserInfo>
      </Dashboard>
    </>
  );
}

export default App;

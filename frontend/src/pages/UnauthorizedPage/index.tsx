import { Link } from "react-router-dom";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";
import AnimatedStatus from "../../shared/animated-status";

interface Props {}

export default function UnauthorizedPage({}: Props) {
  return (
    <>
      <Header>
        <Logo color="icon-red" small={false}></Logo>
        <UserPic profile={undefined} showUser={false}></UserPic>
      </Header>
      <AnimatedStatus status="401"></AnimatedStatus>
      <div className="welcome-message">
        Мы вас не узнаем. Возможно вы ошиблись дверью.
        <Link to="/login">Попробовать снова?</Link>
      </div>
      <div className="desc-message">
        ВЯблочко - система контроля прогресса выполнения задач
      </div>
    </>
  );
}

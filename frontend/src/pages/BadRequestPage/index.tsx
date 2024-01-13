import { Link } from "react-router-dom";
import AnimatedStatus from "../../shared/animated-status";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";

interface Props {}

export default function BadRequestPage({}: Props) {
  return (
    <>
      <Header>
        <Logo color="icon-red" small={false}></Logo>
        <UserPic profile={undefined} showUser={false}></UserPic>
      </Header>
      <AnimatedStatus status="400"></AnimatedStatus>
      <div className="welcome-message">Ой, ошибочка вышла</div>
      <Link to="/">Перейти на главную</Link>
      <div className="desc-message">
        ВЯблочко - система контроля прогресса выполнения задач
      </div>
    </>
  );
}

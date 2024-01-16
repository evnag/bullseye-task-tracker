import { useState } from "react";
import Accordion from "../../shared/accordion";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";
import AccordionItem from "../../shared/accordionItem";
import { UserFilledState, defaulted } from "../../features/userFilled/userFilledSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { addNewUser } from "../../app/services/userService";
import "./create-user-page.css"

interface Props {}

export default function CreateUserPage({}: Props) {
  const accordionData = [
    {
      id: 1,
      title: "Имя",
      content: (
        <AccordionItem
          field={"firstName"}
          message={"Введите имя"}
          placeholder={"Хидельстоун"}
        />
      ),
      value: "firstName",
    },
    {
      id: 2,
      title: "Фамилия",
      content: (
        <AccordionItem
          field={"lastName"}
          message={"Введите фамилию"}
          placeholder={""}
        />
      ),
      value: "lastName",
    },
    {
      id: 3,
      title: "Логин",
      content: (
        <AccordionItem
          field={"username"}
          message={"Введите логин"}
          placeholder={""}
        />
      ),
      value: "username",
    },
    {
      id: 4,
      title: "Аватар",
      content: (
        <AccordionItem
          field={"avatar"}
          message={"Введите аватар"}
          placeholder={""}
        />
      ),
      value: "avatar",
    },
    {
      id: 5,
      title: "Пароль",
      content: (
        <AccordionItem
          field={"password"}
          message={"Введите пароль"}
          placeholder={""}
        />
      ),
      value: "password",
    },
    {
      id: 6,
      title: "Роль",
      content: (
        <AccordionItem field={"role"} message={"Выберите роль"} placeholder={""} />
      ),
      value: "role",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const field = useAppSelector((state) => state.userFilled);
  const dispatch = useAppDispatch();

  let navigate: NavigateFunction = useNavigate();
  const handleDiclineButton= (event:React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(defaulted());
    navigate("/me");
  }

  const handleSaveButton = () => {
    addNewUser(field.username, field.password, field.firstName, field.lastName, field.avatar, field.role).then(
      () => {
        dispatch(defaulted());
        navigate("/me");
      });
  }
  return (
    <>
      <Header>
        <Logo color="icon-green" small={false}></Logo>
        <UserPic profile={undefined} showUser={false}></UserPic>
      </Header>
      <div className="create-title">Создание пользователя</div>
      <div className="accordion">
        {accordionData.map(({ title, content, value }, index) => (
          <Accordion
            key={index}
            title={title}
            content={content}
            value={value as keyof UserFilledState}
            onClick={() => handleItemClick(index)}
            isActive={activeIndex === index}
            field={field}
          />
        ))}
      </div>

      <div className="btn-div">
        <button disabled={!field.password || !field.username}
        className="btn save-btn"
        onClick={(event: React.SyntheticEvent) => {
          event.preventDefault();
          handleSaveButton();
        }} 
         type="button">
          Сохранить
        </button>
        <button className="btn decline-btn" onClick={handleDiclineButton} type="button">Отменить</button>
      </div>
    </>
  );
}

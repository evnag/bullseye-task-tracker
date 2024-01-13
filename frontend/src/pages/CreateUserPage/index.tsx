import { useState } from "react";
import Accordion from "../../shared/accordion";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";
import AccordionItem from "../../shared/accordionItem";
import { UserFilledState } from "../../features/userFilled/userFilledSlice";
import { useAppSelector } from "../../app/hooks";

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
        <AccordionItem field={"role"} message={"Default"} placeholder={""} />
      ),
      value: "role",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsButtonActive(!isButtonActive);
  };

  const field = useAppSelector((state) => state.userFilled);
  return (
    <>
      <Header>
        <Logo color="icon-green" small={false}></Logo>
        <UserPic profile={undefined} showUser={false}></UserPic>
      </Header>
      <div>Создание пользователя</div>
      <div className="accordion">
        {accordionData.map(({ title, content, value }, index) => (
          <Accordion
            key={index}
            title={title}
            content={content}
            value={value as keyof UserFilledState}
            onClick={() => handleItemClick(index)}
            isActive={activeIndex === index}
          />
        ))}
      </div>

      <div>
        <button disabled={!field.password || !field.username} type="button">
          Сохранить
        </button>
        <button type="button">Отменить</button>
      </div>
    </>
  );
}

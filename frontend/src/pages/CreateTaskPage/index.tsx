import { useState } from "react";
import Header from "../../shared/header";
import Logo from "../../shared/logo";
import UserPic from "../../shared/userpic";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../CreateUserPage/create-user-page.css"
import { TaskFilledState, defaulted } from "../../features/taskFilled/taskFilledSlice";
import TaskAccordionItem from "../../shared/taskAccordion/TaskAccordionItem";
import { addNewTask } from "../../app/services/taskService";
import TaskAccordion from "../../shared/taskAccordion";

interface Props {}

export default function CreateTaskPage({}: Props) {
    const taskAccordionData = [
        {
            id: 1,
            title: "Имя задачи",
            content: (
              <TaskAccordionItem
                field={"taskName"}
                message={"Введите имя задачи"}
                placeholder={"имя задачи"}
              />
            ),
            value: "taskName",
        },
        {
            id: 2,
            title: "Приоритет",
            content: (
              <TaskAccordionItem
                field={"priority"}
                message={"Введите приоритет"}
                placeholder={"123"}
              />
            ),
            value: "priority",
        },
        {
            id: 3,
            title: "Статус",
            content: (
              <TaskAccordionItem
                field={"status"}
                message={"Введите статус"}
                placeholder={"123"}
              />
            ),
            value: "status",
        },
        {
            id: 4,
            title: "Описание",
            content: (
              <TaskAccordionItem
                field={"description"}
                message={"Введите описание"}
                placeholder={"123"}
              />
            ),
            value: "description",
        },
        {
            id: 5,
            title: "Сложность",
            content: (
              <TaskAccordionItem
                field={"difficulty"}
                message={"Введите сложность"}
                placeholder={"123"}
              />
            ),
            value: "difficulty",
        },
        {
            id: 6,
            title: "Исполнитель",
            content: (
              <TaskAccordionItem
                field={"executor"}
                message={"Введите исполнителя"}
                placeholder={"123"}
              />
            ),
            value: "executor",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const field = useAppSelector((state) => state.taskFilled);
  const dispatch = useAppDispatch();

  let navigate: NavigateFunction = useNavigate();
  const handleDiclineButton= (event:React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(defaulted());
    navigate("/me");
  }

  const handleSaveButton = () => {
    addNewTask(field.taskName, field.priority, field.status, field.description, field.difficulty, field.executor).then(
      () => {
        dispatch(defaulted());
        navigate("/me");
      });
  }


  return (
    <><Header>
          <Logo color="icon-green" small={false}></Logo>
          <UserPic profile={undefined} showUser={false}></UserPic>
      </Header><div className="create-title">Создание задачи</div><div className="accordion">
              {taskAccordionData.map(({ title, content, value }, index) => (
                  <TaskAccordion
                      key={index}
                      title={title}
                      content={content}
                      value={value as keyof TaskFilledState}
                      onClick={() => handleItemClick(index)}
                      isActive={activeIndex === index}
                      field={field} />
              ))}
          </div><div className="btn-div">
              <button disabled={!field.taskName || !field.executor}
                  className="btn save-btn"
                  onClick={(event: React.SyntheticEvent) => {
                      event.preventDefault();
                      handleSaveButton();
                  } }
                  type="button">
                  Сохранить
              </button>
              <button className="btn decline-btn" onClick={handleDiclineButton} type="button">Отменить</button>
          </div></>
  )
}
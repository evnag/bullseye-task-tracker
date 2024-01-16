import { ChangeEvent, useState } from "react";
import "./search.css"
import { getTaskByName } from "../../app/services/taskService";
import TaskData from "../../entities/taskData/model";
import svg_red from "/src/assets/search-red.svg"
import svg from "/src/assets/search.svg"
import TaskList from "../taskList";
import TaskListItemContent from "../taskList/taskListItemContent";
import { useAppSelector } from "../../app/hooks";
import { TaskFilledState } from "../../features/taskFilled/taskFilledSlice";
// import { TaskFilledState } from "../../features/taskFilled/taskFilledSlice";
// import TaskListItemContent from "../taskList/taskListItemContent";
// import { useAppSelector } from "../../app/hooks";

export default interface SearchProps {}

export default function Search({}) {
  const [search, setSearch] = useState<string>("");
  const [isAnyIputs, setAnyInput] = useState(false);
  const [message, setMessage] = useState("");
  const [svgPath, setSvgPath] = useState(svg);
  const [response, setResponse] = useState<TaskData[]>([]);

  // const tasksAccordionData = (response: TaskData[]) => response.map((item, index) => ({...item, value: response[index]}));


const findTasksHandler = (search: string) => {
  setMessage("");
  setSvgPath(svg);
  getTaskByName(search).then(
    (response: Array<TaskData>)=> {
      if(response.length > 0){
        console.log(response.length)
        setMessage(`Мы нашли ${response.length} задач`)
        setResponse(response)
      } else {
        setMessage("Мы не нашли задач")
        setSvgPath(svg_red)
      }
      // dispatch()
    }
  );
}

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setAnyInput(true);
    findTasksHandler(e.target.value);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const field = useAppSelector((state) => state.taskFilled);

  return (
    <>
      <div className="search-item-input">
        <input  value={search} onChange={(e) => onChangeHandler(e)} placeholder="Сделать презентацию..."/>
        {isAnyIputs && <button type="button">
        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>}
      </div>
      <div className="search-item-description">Введите имя задачи. Мы ее найдем или создадим для вас!</div>
      {message && <div className="search-item-message">{message}</div>}
      {(response).map(({taskName}, index) => (
        <TaskList 
          key={index}
          isActive={activeIndex === index}
          isDisplayed={response.length > 0}
          onClick={() => handleItemClick(index)}
          taskName={taskName} 
          content={
          <TaskListItemContent title={taskName} field={field} value={response[index] as unknown as keyof TaskFilledState}></TaskListItemContent>}>
            
          </TaskList>
      ))}


      <div className="search-item-img">
        <img src={svgPath} alt="" />
      </div>
    </>
  );
}

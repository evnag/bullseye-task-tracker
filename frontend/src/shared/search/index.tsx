import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./search.css"
import "../taskList/taskList.css";
import { getTaskByName } from "../../app/services/taskService";
import TaskData from "../../entities/taskData/model";
import svg_red from "/src/assets/search-red.svg"
import svg from "/src/assets/search.svg"
import TaskList from "../taskList";
import TaskListItemContent from "../taskList/taskListItemContent";
import Pagination from "../pagination";

export default interface SearchProps {}

export default function Search({}) {
  const [search, setSearch] = useState<string>("");
  const [isAnyIputs, setAnyInput] = useState(false);
  const [message, setMessage] = useState("");
  const [svgPath, setSvgPath] = useState(svg);
  const [response, setResponse] = useState<TaskData[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);
  const [offset, setOffset] = useState(0);
  const itemsPerPage  = 2;
  const endOffset = offset + itemsPerPage ;
  const [currentItems, setCurrentItems] = useState<TaskData[]>([]);

  const handlePrevPage = (prevPage: number) => {
    console.log(prevPage);
    setPage((prevPage) => prevPage - 1);
    console.log("Page = " + page);
    handlePageClick();
  };

  const handleNextPage = (nextPage: number) => {
    console.log(nextPage);
    setPage((nextPage) => nextPage + 1);
    console.log("Page = " + page);
    handlePageClick();
  };

  const handlePageClick = () => {
    const newOffset = (page * itemsPerPage ) % response.length;
    setOffset(newOffset);
    console.log("Offset = " + offset);
    console.log("Page = " + page);
  }
  
  useEffect(()=> {
    setCurrentItems(response.slice(offset, endOffset))
    setTotalpages(Math.ceil(response.length / itemsPerPage))
  }, [offset, itemsPerPage]);

const findTasksHandler = (search: string) => {
  setMessage("");
  setSvgPath(svg);
  getTaskByName(search, page).then(
    (response: Array<TaskData>)=> {
      if(response.length > 0){
        setMessage(`Мы нашли ${response.length} задач`)
        setResponse(response)
        setCurrentItems(response.slice(offset, endOffset))
        setTotalpages(Math.ceil(response.length / itemsPerPage))
        console.log("Offset = " + offset);
    console.log("Page = " + page);
      } else {
        setMessage("Мы не нашли задач")
        setSvgPath(svg_red)
      }
    }
  );
}
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setAnyInput(true);
    if(e.target.value.length >= 3){
      findTasksHandler(search);
    } 
    if(e.target.value.length < 3){
      setResponse([]);
      setMessage("Мы не нашли задач")
      setCurrentItems([]);
    }
  };

  const ref = useRef<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index: any) => {
    const element = document.getElementById('edit-btn')
    element?.scrollIntoView({behavior: 'smooth'});
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="search-item-input">
        <input autoFocus value={search} onChange={(e) => onChangeHandler(e)} placeholder="Сделать презентацию..."/>
        {isAnyIputs && 
        <button type="button">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>}
      </div>
      <div className="search-item-img">
        <img src={svgPath} alt="" />
      </div>
      <div className="search-item-description">Введите имя задачи. Мы ее найдем или создадим для вас!</div>
      {message && <div className="search-item-message">{message}</div>}
      {(currentItems).map(({taskName,}, index) => (
        <><TaskList
          key={index}
          isActive={activeIndex === index}
          isDisplayed={response.length > 0}
          isClicked={activeIndex === index}
          onClick={() => handleItemClick(index)}
          taskName={taskName}
          content={<TaskListItemContent ref={ref}
            value={currentItems[index] as unknown as TaskData}>
          </TaskListItemContent>}>
        </TaskList>
        </>
      ))}
        {(response.length > 0) && <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
          handleNextPage={handleNextPage} 
          handlePrevPage={handlePrevPage}
        ></Pagination>}

      
    </>
  );
}

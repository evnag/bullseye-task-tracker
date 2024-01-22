import "./taskList.css";

interface Props {
  isActive: boolean;
  isDisplayed: boolean;
  onClick: () => void;
  taskName: string;
  content: JSX.Element;
  isClicked:boolean;
}

export default function TaskList({
  isActive,
  taskName,
  isDisplayed,
  onClick,
  content,
  isClicked,
}: Props) {

  return (
    <>
      {isDisplayed &&(
        <div className="task-list-accordion" onClick={onClick}>
          {isClicked ? 
          <div className="task-list-accordion-clicked">
            <table>
              <tr>
                <td className="td-name-field">Имя задачи</td>
                <td className="td-name-value">{taskName}</td>
              </tr>
            </table>
          </div>: 
          <div className="task-list-item">{taskName}</div>}
        </div>
      )}
      {isActive && 
      <>
      <div className="task-content">{content}</div></>}
    </>
  );
}

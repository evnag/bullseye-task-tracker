import "./taskList.css";

interface Props {
  isActive: boolean;
  isDisplayed: boolean;
  onClick: () => void;
  taskName: string;
  content: JSX.Element;
}

export default function TaskList({
  isActive,
  taskName,
  isDisplayed,
  onClick,
  content
}: Props) {


  return (
    <>
      {isDisplayed && !isActive &&(
        <div className="task-list-accordion" onClick={onClick}>
          <div className="task-list-item">{taskName}</div>
        </div>
      )}
      {isActive && <div className="accordion-content">{content}</div>}
    </>
  );
}

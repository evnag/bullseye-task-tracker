import TaskData from "../../entities/taskData/model";

interface Props {
  value: TaskData;
  ref: any;
}

export default function TaskListItemContent({ value, ref}: Props) {

  return (
    <><div className="list-item-content">
      <table>
        <tr>
          <td>Приоритет</td>
          <td className="td-value">{value.priority}</td>
        </tr>
        <tr>
          <td>Статус</td>
          <td className="td-value">{value.status}</td>
        </tr>
        <tr>
          <td>Описание</td>
          <td className="td-value">{value.description}</td>
        </tr>
        <tr>
          <td>Сложность</td>
          <td className="td-value">{value.difficulty}</td>
        </tr>
        <tr>
          <td>Исполнитель</td>
          <td className="td-value">{value.executor}</td>
        </tr>
      </table>
    </div>
    <div className="btn-div">
    <button id="edit-btn" className="btn edit-btn" type="button" ref={ref}>Редактировать</button>
    <button className="btn delete-btn" type="button">Удалить</button></div></>
  )
}
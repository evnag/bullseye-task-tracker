import { TaskFilledState } from "../../features/taskFilled/taskFilledSlice";

interface Props<V extends TaskFilledState> {
  title: string;
  field: V;
  value: keyof V;
}

export default function TaskListItemContent<V extends TaskFilledState>({title, field, value}: Props<V>) {

  return (
    <><div className="list-item-content">
      <div>{title}</div>
      <div>{field[value] as string}ТУТ значение</div>
    </div>
    <button type="button">Редактировать</button>
    <button type="button">Удалить</button></>
  )
}
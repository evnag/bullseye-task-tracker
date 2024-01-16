import { useAppDispatch } from "../../app/hooks";
import { TaskFilledState } from "../../features/taskFilled/taskFilledSlice";
import {
  updated,
} from "../../features/taskFilled/taskFilledSlice";

interface TaskAccordionItemProps {
  message: string;
  placeholder: string;
  field: keyof TaskFilledState;
}

export default function TaskAccordionItem({
  message,
  placeholder,
  field,
}: TaskAccordionItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="accordion-item-input">
      <input
      autoFocus
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          dispatch(
            updated({
              field,
              value: event.target.value,
            })
          );
        }}
      />
      <p>{message}</p>
    </div>
  );
}

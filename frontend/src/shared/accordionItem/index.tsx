import { useAppDispatch } from "../../app/hooks";
import {
  UserFilledState,
  updated,
} from "../../features/userFilled/userFilledSlice";

interface AccordionItemProps {
  message: string;
  placeholder: string;
  field: keyof UserFilledState;
}

export default function AccordionItem({
  message,
  placeholder,
  field,
}: AccordionItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="accordion-item-input">
      <input
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

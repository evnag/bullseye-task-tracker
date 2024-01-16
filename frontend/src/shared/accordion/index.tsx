import { UserFilledState } from "../../features/userFilled/userFilledSlice";
import "./accordion.css";
interface Props<V extends UserFilledState> {
  title: string;
  content: JSX.Element;
  value: keyof V;
  isActive: boolean;
  onClick: () => void;
  field: V;
}

export default function Accordion<V extends UserFilledState>({
  title,
  content,
  value,
  isActive,
  onClick,
  field
}: Props<V>) {
  
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-title" onClick={onClick}>
          <div className="title">{title}</div>
          <div className="value">{field[value] as string || "Нет"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
}

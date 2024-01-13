import { useAppSelector } from "../../app/hooks";
import { UserFilledState } from "../../features/userFilled/userFilledSlice";
import "./accordion.css";
interface Props {
  title: string;
  content: JSX.Element;
  value: keyof UserFilledState;
  isActive: boolean;
  onClick: () => void;
}

export default function Accordion({
  title,
  content,
  value,
  isActive,
  onClick,
}: Props) {
  const field = useAppSelector((state) => state.userFilled);
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-title" onClick={onClick}>
          <div className="title">{title}</div>
          <div className="value">{field[value] || "Нет"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
}

import { cn } from "@bem-react/classname";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clicked } from "../../features/loginButton/loginButtonSlice";
import "./login-button.css";

export interface LoginButtonProps {
  handleForm: () => void;
}

export default function LoginButton({ handleForm }: LoginButtonProps) {
  const color = useAppSelector((state) => state.loginButton.color);
  const isActive = useAppSelector((state) => state.loginButton.isActive);

  const loginButton = cn("login-button");
  const dispatch = useAppDispatch();

  function enabled(): void {
    if (isActive) {
      dispatch(clicked());
    }
  }

  return (
    <button
      type="button"
      className={loginButton(color, loginButton({ disabled: !isActive }))}
      id="login-btn"
      onClick={(event: React.SyntheticEvent) => {
        event.preventDefault();
        enabled();
        handleForm();
      }}
    ></button>
  );
}

import { cn } from "@bem-react/classname";

interface LoginProps {}

export default function Login({}: LoginProps) {
  const login = cn("login");

  return (
    <>
      <div className={login()}>
        <div className="auths">
          <input
            type="text"
            id="auths_input"
            placeholder="petr999@example.com"
          />
        </div>
        <div className="welcome-message">Мы вас не узнали. Представьтесь</div>
        <div className="desc-message">
          ВЯблочко - система контроля прогресса выполнения задач
        </div>
      </div>
    </>
  );
}

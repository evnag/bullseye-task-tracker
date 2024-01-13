import { cn } from "@bem-react/classname";

export interface PasswordSubmitProps {}

export default function PasswordSubmit({}: PasswordSubmitProps) {
  const pass_submit = cn("pass-submit");
  return (
    <div className={pass_submit()}>
      <button id="pass-btn">
        <svg id="circle-check">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.625 0C15.45 0 11.25 4.2 11.25 9.375C11.25 9.975 11.25 10.575 11.3625 11.1375L0 22.5V30H11.25V22.5H18.75V18.75L18.8625 18.6375C19.425 18.75 20.025 18.75 20.625 18.75C25.8 18.75 30 14.55 30 9.375C30 4.2 25.8 0 20.625 0ZM22.5 3.75C24.5625 3.75 26.25 5.4375 26.25 7.5C26.25 9.5625 24.5625 11.25 22.5 11.25C20.4375 11.25 18.75 9.5625 18.75 7.5C18.75 5.4375 20.4375 3.75 22.5 3.75Z"
              fill="#000022"
            />
          </svg>
        </svg>
      </button>
    </div>
  );
}

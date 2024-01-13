import LoginButton from "../login-button";
import "./login.css";
import { withNaming } from "@bem-react/classname";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  passwordSchema,
  usernameSchema,
} from "../../app/validations/loginValidation";
import { useState } from "react";
import {
  succeedValidated,
  validationFailed,
} from "../../features/loginButton/loginButtonSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { userLogin } from "../../app/services/authService";

const cn = withNaming({ n: "", e: "-", m: "_", v: "_" });

export interface LoginProps {}

export default function Login({}: LoginProps) {
  const placeholder = useAppSelector((state) => state.authInput.placeholder);
  const message = useAppSelector((state) => state.authInput.message);
  const borderColor = useAppSelector((state) => state.authInput.borderColor);
  const inputType = useAppSelector((state) => state.authInput.type);

  const login = cn("login");
  const input = cn("input", borderColor);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  // const [loginUser] = useLoginUserMutation();

  let inputProps = {
    value: username,
    type: inputType,
    key: inputType,
    onChange: handleUsernameChange,
  };
  if (inputType === "password") {
    inputProps.value = password;
    inputProps.onChange = handlePasswordChange;
  }

  async function handleUsernameChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    setUsername(e.target.value);
    console.log(e.target.value);
    let usernameValue = { username: e.target.value };

    const isUsernameValid: boolean = await usernameSchema.isValid(
      usernameValue
    );
    if (isUsernameValid) {
      dispatch(succeedValidated());
    } else {
      dispatch(validationFailed());
      console.log(isUsernameValid);
    }
    console.log(isUsernameValid);
  }

  async function handlePasswordChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    setPassword(e.target.value);
    console.log(e.target.value);
    let passwordValue = { password: e.target.value };

    const isPasswordValid: boolean = await passwordSchema.isValid(
      passwordValue
    );
    if (isPasswordValid && inputType === "password") {
      dispatch(succeedValidated());
      console.log(e.target.value);
    } else {
      dispatch(validationFailed());
    }
  }

  let navigate: NavigateFunction = useNavigate();

  // const [loading, setLoading] = useState<boolean>(false);
  // const [loginMessage, setMessage] = useState<string>("");

  const handleChange = () => {
    if (password && username) {
      // setMessage("");
      // setLoading(true);

      userLogin(username, password).then(
        () => {
          navigate("/me");
        }
        // (error) => {
        //   const resMessage =
        //     (error.response &&
        //       error.response.data &&
        //       error.response.data.message) ||
        //     error.message ||
        //     error.toString();

        //   setLoading(false);
        //   setMessage(resMessage);
        // }
      );
    }
  };

  return (
    <>
      <div className={login({})}>
        <div className="auths">
          <input
            autoFocus
            className={input()}
            id="auths_input"
            placeholder={placeholder}
            {...inputProps}
          />
          <LoginButton handleForm={handleChange}></LoginButton>
        </div>
        <div className="welcome-message">{message}</div>
      </div>
    </>
  );
}

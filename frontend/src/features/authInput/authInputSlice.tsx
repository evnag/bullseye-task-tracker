import { createSlice } from "@reduxjs/toolkit";
import { clicked as loginButtonClicked } from "../loginButton/loginButtonSlice";
import { succeedValidated as inputSucceedValidated } from "../loginButton/loginButtonSlice";
import { validationFailed as inputValidationFailed } from "../loginButton/loginButtonSlice";

type InitialState = {
  placeholder: string;
  message: string;
  borderColor: string;
  type: string;
};

const initialState: InitialState = {
  placeholder: "petr999@example.com",
  message: "Мы вас не узнали. Представьтесь",
  borderColor: "",
  type: "text",
};

const authInputSlice = createSlice({
  name: "authInput",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginButtonClicked, (state) => {
      (state.message = "Отлично! Теперь пароль :)"),
        (state.placeholder = ""),
        (state.type = "password"),
        (state.borderColor = "");
    });
    builder.addCase(inputSucceedValidated, (state) => {
      state.borderColor = "green";
      state.placeholder = "";
    });
    builder.addCase(inputValidationFailed, (state) => {
      (state.borderColor = "red"), (state.placeholder = "");
    });
  },
});

export default authInputSlice.reducer;
// export const { posted } = authInputSlice.actions;

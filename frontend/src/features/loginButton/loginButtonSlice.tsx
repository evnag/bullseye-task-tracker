import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  color: string;
  isActive: boolean;
};

const initialState: InitialState = {
  color: "grey",
  isActive: false,
};

const loginButtonSlice = createSlice({
  name: "loginButton",
  initialState,
  reducers: {
    clicked: (state) => {
      state.color = "key";
      state.isActive = false;
    },
    succeedValidated: (state) => {
      state.color = "green";
      state.isActive = true;
    },
    validationFailed: (stat) => {
      stat.color = "red";
    },
  },
});

export default loginButtonSlice.reducer;
export const { clicked, succeedValidated, validationFailed } =
  loginButtonSlice.actions;

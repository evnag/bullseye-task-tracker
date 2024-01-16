import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserFilledState = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  password: string;
  role: string;
};

const initialState: UserFilledState = {
  firstName: "",
  lastName: "",
  username: "",
  avatar: "",
  password: "",
  role: "USER",
};

type UserFieldAction = {
  field: keyof UserFilledState;
  value: string;
};

const userFilledSlice = createSlice({
  name: "userFilled",
  initialState,
  reducers: {
    updated: (state, action: PayloadAction<UserFieldAction>) => {
      state[action.payload.field] = action.payload.value;
      return state;
    },
    defaulted:(state)=>{
      state = initialState;
      return state;
    },
  },
});

export default userFilledSlice.reducer;
export const { updated, defaulted } = userFilledSlice.actions;

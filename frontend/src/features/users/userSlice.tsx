import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export default userSlice.reducer;
export const { setUser, logout } = userSlice.actions;

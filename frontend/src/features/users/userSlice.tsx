import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}

// const initialState: Array<User> = [];
const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json()
  );
  return res;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<Array<User>>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});

// export const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<User>) => {
//       state.push(action.payload);
//     },
//   },
// });

// export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;

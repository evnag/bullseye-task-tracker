import { configureStore } from "@reduxjs/toolkit";
import authInputReducer from "../features/authInput/authInputSlice";
import loginButtonReducer from "../features/loginButton/loginButtonSlice";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    authInput: authInputReducer,
    loginButton: loginButtonReducer,

    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

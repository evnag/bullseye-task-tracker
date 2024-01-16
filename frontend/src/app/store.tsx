import { configureStore } from "@reduxjs/toolkit";
import authInputReducer from "../features/authInput/authInputSlice";
import loginButtonReducer from "../features/loginButton/loginButtonSlice";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "../features/users/userSlice";
import saveButtonReducer from "../features/saveButton/saveButtonSlice";
import userFilledReducer from "../features/userFilled/userFilledSlice";
import taskFilledSlice from "../features/taskFilled/taskFilledSlice";

const store = configureStore({
  reducer: {
    authInput: authInputReducer,
    loginButton: loginButtonReducer,
    saveButton: saveButtonReducer,
    userFilled: userFilledReducer,
    taskFilled: taskFilledSlice,

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

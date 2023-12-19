import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TaskSearchPage from "../pages/TaskSearchPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "search", element: <TaskSearchPage /> },
      { path: "", element: <UserProfilePage /> },
      { path: "login", element: <LoginPage /> },
      //   { path: "userprofile", element: <UserProfilePage /> }
    ],
  },
]);

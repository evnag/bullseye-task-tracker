import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TaskSearchPage from "../pages/TaskSearchPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/LoginPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import BadRequestPage from "../pages/BadRequestPage";
import LogoutPage from "../pages/LogoutPage";
import CreateUserPage from "../pages/CreateUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },

      { path: "login", element: <LoginPage /> },
      { path: "logout", element: <LogoutPage /> },

      {
        path: "me",
        element: <UserProfilePage />,
      },
      { path: "search", element: <TaskSearchPage /> },
      { path: "add-user", element: <CreateUserPage /> },

      { path: "401", element: <UnauthorizedPage /> },
      { path: "400", element: <BadRequestPage /> },
    ],
  },
]);

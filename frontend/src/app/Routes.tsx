import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TaskSearchPage from "../pages/TaskSearchPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/LoginPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import BadRequestPage from "../pages/BadRequestPage";
// import ProtectedRoute from "../features/protectedRoute";

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

      {
        path: "/me",
        element: (
          <UserProfilePage />
          // <ProtectedRoute>
          //   <UserProfilePage />
          // </ProtectedRoute>
        ),
      },
      { path: "search", element: <TaskSearchPage /> },

      { path: "/401", element: <UnauthorizedPage /> },
      { path: "/400", element: <BadRequestPage /> },
      //   { path: "userprofile", element: <UserProfilePage /> }
    ],
  },
]);

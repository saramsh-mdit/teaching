import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../modules/auth/pages/register";
import HomePage from "../modules/home/pages";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Prices from "../pages/Prices";
import TaskDashboard from "../pages/TaskDashboard";
import PrivateRoutes from "./PrivateRoute";
import Features from "../pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/taskDashboard",
        element: (
          <PrivateRoutes>
            <TaskDashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;

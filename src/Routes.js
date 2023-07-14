import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Index";
import Profile from "./pages/Profile/Profile";
import Billing from "./pages/client/Billing";
import Security from "./pages/client/Security";
import Membership from "./pages/client/Membership";
import CreateJob from "./pages/client/CreateJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/create-job",
    element: <CreateJob />,
  },
  {
    path: "/client-billing",
    element: <Billing />,
  },
  {
    path: "/client-security",
    element: <Security />,
  },
  {
    path: "/client-membership",
    element: <Membership />,
  },
]);

export default routes;

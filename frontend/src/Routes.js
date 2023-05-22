
import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from './pages/Dashboard/Index'

const routes = createBrowserRouter([
  {
    path: "/", element: <Landing />,
  },
  {
    path: "/login", element: <Login />,
  },
  {
    path: "/register", element: <Register />,
  },
  {
    path: "Dashboard", element: <Dashboard />
  }
]);

export default routes;

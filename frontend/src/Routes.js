
import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const routes = createBrowserRouter([
  {
    path: "/", element: <Landing />,
  },
  {
    path: "/login", element: <Login />,
  },
  {
    path: "/register", element: <Register />,
  }
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/surveys',
    element: <Surveys />
  }
])

export default router;
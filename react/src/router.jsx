import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import AuthLayout from "./components/AuthLayout";
import GuestLayout from "./components/GuestLayout";
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
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/surveys',
        element: <Surveys />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])

export default router;
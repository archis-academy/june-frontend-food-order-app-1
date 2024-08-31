/* eslint-disable no-dupe-keys */
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import DashBoard from "./pages/dashboard/dashboard.jsx";
import Discount from "./pages/Discount/Discount.jsx";
import Message from "./pages/MessagePage/Message.jsx";
import Notification from "./pages/NotificationPage/Notification.jsx";






const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
        </ProtectedRoute>
    ),
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
      <DashBoard />
      </ProtectedRoute> 
    ),
  },
  {
    path: "/logout",
    element: <LoginPage />,
  },

  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
  path: "/settings/:tabName",
  element: <SettingsPage />
  },




];

export default routes;

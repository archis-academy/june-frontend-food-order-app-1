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

    element: <HomePage />,
  },
  {
    path: "/discount",
    element: <Discount />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/dashboard",
    element: (
      <DashBoard />
    ),
  },
  {
    path: "/logout",
    element: <LoginPage />,
  },

  {
    path: "/settings",
    element: (
        <SettingsPage />
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

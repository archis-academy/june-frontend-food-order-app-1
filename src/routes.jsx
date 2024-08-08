/* eslint-disable no-dupe-keys */
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import DashBoard from "./pages/dashboard/dashboard.jsx";



const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  
  {
    path: "/dashboard",
    element: (
      <DashBoard />
    ),
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

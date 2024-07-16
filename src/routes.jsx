// import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Appearance from "./components/Appearance/Appearance.jsx";

const routes = [
  {
    path: "/",
    element: (
        <HomePage />
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
    element: (

        <SettingsPage />
    ),
  },
  
];

export default routes;

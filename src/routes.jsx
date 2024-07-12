// import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import MTOChartSection from "./components/MostTypeOfDinner/MostTypeOfDinner.jsx";


const routes = [
  {
    path: "/",
    element: (
        <HomePage />
    ),
  },
  
  {
    path: "/dashboard",
    element: (
      <MTOChartSection />
    ),
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
];

export default routes;

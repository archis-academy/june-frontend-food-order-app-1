/* eslint-disable no-dupe-keys */
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: (
   <Dashboard />
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

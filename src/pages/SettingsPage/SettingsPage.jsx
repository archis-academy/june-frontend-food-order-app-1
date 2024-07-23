import { useParams, Navigate } from "react-router-dom";
import ProductsManagement from "../../components/ProductManagment/ProductManagment";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import "./SettingsPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appearance from "../../components/Appearance/Appearance";
import YourRestaurant from "../../components/YourRestaurant/YourRestaurant";
import Notifications from "../../components/Notifications/Notifications";
import SecurityPage from "../../components/SecurityPage/SecurityPage";
import AboutUs from "../../components/AboutUs/AboutUs";

function SettingsPage() {
  const { tabName } = useParams();

  const settingComponents = {
    "appearance": <Appearance />,
    "your-restaurant": <YourRestaurant />,
    "product-management": <ProductsManagement />, 
    "notifications": <Notifications />,
    "security": <SecurityPage />,
    "about-us": <AboutUs />,
  };

  if (!tabName) {
    return <Navigate to="/settings/product-management" replace />;
  }

  return (
    <>
      <Sidebar />
      <main className="settings-page">
        <h1 className="settings-title">Settings</h1>
        <div className="main-container">
          <SettingsSidebar />
          {settingComponents[tabName]
            ? settingComponents[tabName]
            : settingComponents["product-management"]}
        </div>
      </main>
    </>
  );
}

export default SettingsPage;

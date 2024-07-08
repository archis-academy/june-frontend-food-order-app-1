import "./SettingsSidebar.scss";
import { NavLink } from "react-router-dom";
import tabs from "./Tabs";
import Sidebar from "../../components/Sidebar/Sidebar";

function SettingsSidebar() {
  return (
    <div>
      <Sidebar/>
    <div className="sidebar-container">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) => {
            return isActive && "active";
          }}
        >
          <div className="list-group">
            {tab.icon}
            <div className="list-title-box">
              <h4>{tab.title}</h4>
              <p>{tab.detail}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
    </div>
  );
}

export default SettingsSidebar;
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import sidebarLinks from "./SidebarLinks";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <img src="../../public/Logo.png" alt="logo" className="logo" />
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="navbar-items">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "nav-item active-link" : "nav-item")}
              >
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

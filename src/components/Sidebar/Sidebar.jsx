import "./Sidebar.scss";
import { NavLink, useLocation } from "react-router-dom";
import sidebarLinks from "./SidebarLinks";

function Sidebar() {
  let location = useLocation();
  let pathnameFirst = location.pathname.split("/")[0];
  return (
    <aside className="sidebar">
      <nav className="navbar">
        <img src="../../public/Logo.png" alt="logo" className="logo" />
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="navbar-items">
              <NavLink
                to={link.path}
                className={link.path === pathnameFirst ? "nav-item active-link" : "nav-item"}
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

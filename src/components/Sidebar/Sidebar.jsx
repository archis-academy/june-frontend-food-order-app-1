import "./Sidebar.scss";
import { NavLink, useLocation } from "react-router-dom";
import sidebarLinks from "./SidebarLinks";

function Sidebar() {
  let location = useLocation();
  function logout() {
    localStorage.removeItem("currentuser");
  }

  return (
    <aside className="sidebar">
      <nav className="navbar">
        <img src="../../public/Logo.png" alt="logo" className="logo" />
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="navbar-items">
              <NavLink
                to={link.path == "/logout" ? "/login" : link.path}
                onClick={link.path == "/logout" ? logout : null}
                className={link.path === location.pathname ? "nav-item active-link" : "nav-item"}
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

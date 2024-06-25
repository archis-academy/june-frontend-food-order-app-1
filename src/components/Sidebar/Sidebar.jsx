// Sidebar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import leftArrow from "/left-arrow.svg";
import sidebarLinks from "./SidebarLinks";

function Sidebar() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  function toggleSidebar() {
    setIsSidebarToggled(!isSidebarToggled);
  }

  return (
    <aside className={`sidebar ${!isSidebarToggled && "sidebar-collapsed"}`}>
      <nav>
        <ul>
          <li className="left-arrow" onClick={toggleSidebar}>
            <img
              src={leftArrow}
              alt="Toggle Sidebar"
              style={{
                transform: !isSidebarToggled
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            />
          </li>
          <li>
            <img src="../../public/Logo.png" alt="logo" className="logo" />
          </li>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="icons">
              <Link to={link.path}>
                <img src={link.src} alt={link.alt} />
                {isSidebarToggled && <span>{link.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

import home from "/Home.svg";
import discount from "/Discount.svg";
import dashboard from "/Dashboard.svg";
import message from "/Message.svg";
import settings from "/Setting.svg";
import logOut from "/Log Out.svg";

const sidebarLinks = [
  { src: home, alt: "Home", label: "Home", path: "/" },
  { src: discount, alt: "Discount", label: "Discount", path: "/discount" },
  { src: dashboard, alt: "Dashboard", label: "Dashboard", path: "/dashboard" },
  { src: message, alt: "Message", label: "Message", path: "/message" },
  { src: settings, alt: "Settings", label: "Settings", path: "/settings" },
  { src: logOut, alt: "Log Out", label: "Log Out", path: "/logout" },
];

export default sidebarLinks;
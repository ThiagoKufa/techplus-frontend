import { MdHomeFilled, MdDashboard, MdPerson } from "react-icons/md";

import { NavLink } from "../NavLink/NavLink";
import "./SideBarStyles.css";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <h1 className="sidebar-title">techplus</h1>
      <nav className="nav-container">
        <ul className="nav-content">
          <NavLink Icon={MdHomeFilled} name="home" url="/" />
          <NavLink Icon={MdDashboard} name="dashboard" url="/dashboard" />
          <NavLink Icon={MdPerson} name="user" url="/user" />
        </ul>
      </nav>
      <div className="sidebar-footer">v4.0</div>
    </div>
  );
};

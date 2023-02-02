import { MdHomeFilled, MdDashboard, MdPerson } from "react-icons/md";

import { Link } from "react-router-dom";
import "./SideBarStyles.css";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <h1 className="sidebar-title">techplus</h1>
      <nav className="nav-container">
        <ul className="nav-content">
          <Link to="/">
            <li className="nav-content__item">
              <MdHomeFilled className="nav-content__item__icon" />
              home
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="nav-content__item">
              <MdDashboard className="nav-content__item__icon" />
              dashboard
            </li>
          </Link>
          <Link to="/user">
            <li className="nav-content__item">
              <MdPerson className="nav-content__item__icon" />
              user
            </li>
          </Link>
        </ul>
      </nav>
      <div className="sidebar-footer">v4.0</div>
    </div>
  );
};

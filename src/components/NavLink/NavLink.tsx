import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import "./NavLinkStyle.css";

interface INavLinkProps {
  name: string;
  url: string;
  Icon: IconType;
}

export const NavLink = ({ name, url, Icon }: INavLinkProps) => {
  return (
    <Link to={url}>
      <li className="nav-content__item">
        <Icon className="nav-content__item__icon" />
        {name}
      </li>
    </Link>
  );
};

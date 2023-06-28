import { NavLink } from "react-router-dom";
import { publicRoutes } from "../routes";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";
import "./Navbar.scss";

const Navbar = () => {
  const isActiveNavbarLink = ({
    isActive,
  }: {
    isActive: boolean;
  }) => (isActive ? "navbar-link-active" : "navbar-link");


  return (
    <nav className="flex align-items-center p-2 border-bottom-1 mb-6 border-secondary-500 ">
      <ul className="flex align-items-center gap-6 flex-grow-1">
        <li className="navbar-li">
          <NavLink to={publicRoutes.home} className={isActiveNavbarLink}>
            Home
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to={publicRoutes.store} className={isActiveNavbarLink}>
            Store
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to={publicRoutes.about} className={isActiveNavbarLink}>
            About
          </NavLink>
        </li>
      </ul>
      <div className="relative">
        <Button type="button" icon="pi pi-shopping-cart " rounded outlined />
        <Badge
          value={2}
          severity="warning"
          className="absolute navbar-shopping-badge"
        />
      </div>
    </nav>
  );
};

export default Navbar;

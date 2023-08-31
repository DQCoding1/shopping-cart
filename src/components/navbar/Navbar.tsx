import { NavLink } from "react-router-dom";
import { publicRoutes } from "../../routes";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";
import "./Navbar.scss";
import { showAside } from "../../context/slice/AsideSlice";
import { useAppDispatch, useAppSelector } from "../../context/hooks/hooks";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isActiveNavbarLink = ({ isActive }: { isActive: boolean }) =>
        isActive ? "navbar-link-active" : "navbar-link";
    const shoppingCart = useAppSelector(state => state.shoppingCart)

    return (
        <header>
            <nav className="flex align-items-center p-2 border-bottom-1 mb-6 border-secondary-500 ">
                <ul className="flex align-items-center gap-5 flex-grow-1">
                    <li className="navbar-li">
                        <NavLink
                            to={publicRoutes.home}
                            className={isActiveNavbarLink}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink
                            to={publicRoutes.contact}
                            className={isActiveNavbarLink}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink
                            to={publicRoutes.about}
                            className={isActiveNavbarLink}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
                <div className="relative">
                    <Button
                        type="button"
                        icon="pi pi-shopping-cart "
                        rounded
                        outlined
                        onClick={()=> dispatch(showAside())}
                    />
                    <Badge
                        value={shoppingCart.length}
                        severity="warning"
                        className="absolute navbar-shopping-badge"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

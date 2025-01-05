import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { routes, getPath } from "../routes";
import logo from "../assets/ANA_logo_outlined.svg";
import classes from "./NavBar.module.css";

function HamburgerMenu({
   onClick,
   className,
}: {
   onClick?: React.MouseEventHandler;
   className?: string;
}) {
   return (
      <div
         className={`${classes.hamburger} ${className}`}
         onClick={onClick}
         aria-label="Toggle navigation menu"
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
}

function NavBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header className={classes.header}>
         <img src={logo} alt="ANA Logo" className={classes.logo} />
         <ul
            className={`${classes.list} ${
               isMenuOpen ? classes.sidebar : classes.topbar
            }`}
         >
            {routes
               .filter(({ showInNavBar }) => showInNavBar)
               .map(({ title, path, id }) => (
                  <li key={id}>
                     <NavLink
                        to={path ? path : ""}
                        className={({ isActive }) =>
                           isActive ? classes.active : undefined
                        }
                     >
                        {title}
                     </NavLink>
                  </li>
               ))}
         </ul>
         <HamburgerMenu onClick={() => setIsMenuOpen((prev) => !prev)} />
      </header>
   );
}

export default NavBar;

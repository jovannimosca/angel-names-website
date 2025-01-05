import whiteLogo from "../assets/ANA_logo_white.svg";
import classes from "./Footer.module.css";

function Footer() {
   return (
      <footer className={classes.footer}>
         <img src={whiteLogo} alt="ANA Logo (White)" />
         <div>
            <p>PO Box 423</p>
            <p>Saratoga Springs NY 12866</p>
            <p>518-654-2411</p>
            <p>info@angelnames.org</p>
         </div>
      </footer>
   );
}

export default Footer;

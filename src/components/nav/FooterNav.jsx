// packages
import { NavLink, Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer-nav">
      <NavLink to="/contact">Contact</NavLink>
      <div>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </nav>
  );
}

export default FooterNav;

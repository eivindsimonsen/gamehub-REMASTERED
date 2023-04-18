// hooks
// packages
import { NavLink, Link } from "react-router-dom";
// images
import logoImage from "../../assets/GameHub_Logo.png";
import profile from "../../assets/profile-image.jpg";

function HeaderNav() {
  return (
    <nav className="header-nav">
      <Link
        to="/"
        className="brand-logo">
        <img
          src={logoImage}
          alt="Gamehub logo"
        />
      </Link>
      <ul>
        <div role="list">
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
          <li>
            <NavLink to="/sell">Sell game</NavLink>
          </li>
        </div>
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search..."
            autoFocus
          />
        </div>
        <li>
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user">
            <img
              src={profile}
              alt="User"
              className="profile-container-image"
            />
          </NavLink>
        </li>
        <li className="profile-container">
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;

// hooks
import { useState } from "react";
// packages
import { NavLink, Link } from "react-router-dom";
// images
import logoImage from "../../assets/GameHub_Logo.png";
import profile from "../../assets/profile-image.jpg";

function HeaderNav() {
  // states
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="header-nav">
        <Link
          to="/"
          className="brand-logo">
          <img
            src={logoImage}
            alt="Gamehub logo"
          />
        </Link>
        <ul className="desktop-nav">
          <div role="list">
            <li role="listitem">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li role="listitem">
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
            <NavLink
              aria-label="shopping cart"
              to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li className="profile-image">
            <NavLink to="/user">
              <img
                src={profile}
                alt="User"
              />
            </NavLink>
          </li>
        </ul>
        <ul className="mobile-nav">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
            />
          </div>
          <i
            onClick={showMenu}
            className="fa-solid fa-bars"></i>
          {show && (
            <>
              <div className="collapse-nav">
                <i
                  onClick={showMenu}
                  className="fa-solid fa-x"></i>
                <div className="collapse-nav-actions">
                  <div>
                    <li>
                      <NavLink
                        onClick={showMenu}
                        to="/games">
                        Games
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={showMenu}
                        to="/sell">
                        Sell game
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={showMenu}
                        className="logout"
                        to="/login">
                        Login
                      </NavLink>
                    </li>
                  </div>
                  <div className="collapse-nav-user">
                    <li className="profile-image">
                      <NavLink
                        onClick={showMenu}
                        to="/user">
                        <img
                          src={profile}
                          alt="User"
                        />
                      </NavLink>
                    </li>
                    <button onClick={() => console.log("You've logged out")}>
                      Logout
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;

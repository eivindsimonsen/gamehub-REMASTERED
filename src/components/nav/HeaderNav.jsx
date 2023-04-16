import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <nav>
      <div className="brand-logo">
        <NavLink to="/">LOGO</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/sell">Sell game</NavLink>
        </li>
        <input type="text" />
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;

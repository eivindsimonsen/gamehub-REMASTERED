import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sell() {
  const [user] = useState(false);

  return (
    <section id="sell">
      {user ? (
        <div>
          <h1>You must log in to see your inventory of games</h1>
        </div>
      ) : (
        <div className="sell-logged-out">
          <h1>
            You must <span className="purple-span">log in</span> to see your inventory of games
          </h1>
          <NavLink
            to="/login"
            className="cta cta-alt">
            Go to login
          </NavLink>
        </div>
      )}
    </section>
  );
}

export default Sell;

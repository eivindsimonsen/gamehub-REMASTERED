import { useState } from "react";
import Login from "./../login/Login";
import SellCard from "./SellCard";

function Sell() {
  const [user] = useState(true);

  return (
    <section id="sell">
      {user ? (
        <div className="container">
          <h1>Games you own: </h1>
          <div>
            <SellCard />
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </section>
  );
}

export default Sell;

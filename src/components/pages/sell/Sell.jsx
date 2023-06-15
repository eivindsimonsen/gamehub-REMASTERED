import { useState } from "react";
import Login from "./../login/Login";
import SellCard from "./SellCard";
import { UserAuth } from "../../../context/AuthContext";

function Sell() {
  const { user } = UserAuth();

  return (
    <section id="sell">
      {user ? (
        <div className="container">
          <h1 className="sell-logged-in-title">Games you own: </h1>
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

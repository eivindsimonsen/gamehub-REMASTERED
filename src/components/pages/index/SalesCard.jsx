// hooks
import { useState, useEffect } from "react";
// functions
import { db } from "../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

function SalesCard() {
  const [games, setGames] = useState([]);

  // read operation
  useEffect(() => {
    const q = query(collection(db, "games"), where("sale", "==", true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let gamesArr = [];
      querySnapshot.forEach((doc) => {
        gamesArr.push({ ...doc.data(), id: doc.id });
      });
      setGames(gamesArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {games.map((game, index) => (
        <div
          key={index}
          className="card">
          <img
            src={game.image}
            alt={game.title}
          />
          <div>
            <div className="card-title-price">
              <h3>{game.title}</h3>
              <strong>
                <s>{game.price}</s> <span>{game.price - game.discount} credits</span>
              </strong>
            </div>
            <p>{game.description}</p>
            <Link to={`details/${game.id}`}>
              <button className="cta cta-primary">Read more</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default SalesCard;

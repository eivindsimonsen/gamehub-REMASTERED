// hooks
import { useState, useEffect } from "react";
// functions
import { db } from "../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

function PopularCard() {
  const [games, setGames] = useState([]);

  // read operation
  useEffect(() => {
    const q = query(collection(db, "games"), where("popular", "==", true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let gamesArr = [];
      querySnapshot.forEach((doc) => {
        gamesArr.push({ ...doc.data(), id: doc.id });
      });
      setGames(gamesArr);
    });
    return () => unsubscribe();
  }, []);

  // console.log(games);

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
                <span>{game.price} credits</span>
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

export default PopularCard;

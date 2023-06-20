// hooks
import { useState, useEffect } from "react";
// functions
import { db } from "../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
// components
import Spinner from "../../common/Spinner";

function Games() {
  const [active, setActive] = useState(0);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [showPre, setPre] = useState(false);
  const [showSales, setSales] = useState(false);

  // read operation
  useEffect(() => {
    let q;

    // Determine the query based on the current state values
    if (showAll) {
      q = query(collection(db, "games"));
    } else if (showPre) {
      q = query(collection(db, "games"), where("released", "==", false));
    } else if (showSales) {
      q = query(collection(db, "games"), where("sale", "==", true));
    }

    if (q) {
      // Check if the query is defined
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let gamesArr = [];
        querySnapshot.forEach((doc) => {
          gamesArr.push({ ...doc.data(), id: doc.id });
        });
        setGames(gamesArr);
        setIsLoading(false);
      });
      return () => unsubscribe();
    }
  }, [showAll, showPre, showSales]);

  console.log(games);

  return (
    <>
      <section className="games container--big">
        <aside className="games-filter">
          <ul>
            <li
              onClick={() => {
                setActive(0);
                setShowAll(true);
                setPre(false);
                setSales(false);
              }}
              className={active === 0 ? "active" : ""}>
              All games
            </li>
            <li
              onClick={() => {
                setActive(1);
                setShowAll(false);
                setPre(true);
                setSales(false);
              }}
              className={active === 1 ? "active" : ""}>
              Pre-order
            </li>
            <li
              onClick={() => {
                setActive(2);
                setShowAll(false);
                setPre(false);
                setSales(true);
              }}
              className={active === 2 ? "active" : ""}>
              Sales
            </li>
          </ul>
        </aside>
        <div className="games-container">
          {isLoading && <Spinner />}
          {games.map((game, index) => (
            <div
              className="games-container-content"
              key={index}>
              <img
                src={game.image}
                alt={game.title}
              />
              <div className="games-container-content-hidden">
                <p>{game.title}</p>
                {game.sale ? (
                  <>
                    <s>{game.price}</s> <p>{game.price - game.discount} credits</p>
                  </>
                ) : (
                  <>
                    <p>{game.price} credits</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Games;

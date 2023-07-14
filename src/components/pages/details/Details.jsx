// hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// functions
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
// components
import Spinner from "../../common/Spinner";

function Details() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  // read operation
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameDocRef = doc(db, "games", id);
        const gameDocSnapshot = await getDoc(gameDocRef);

        if (gameDocSnapshot.exists()) {
          setGame({ id: gameDocSnapshot.id, ...gameDocSnapshot.data() });
        } else {
          setGame(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);

  // REMEMBER TO REMOVE THIS
  useEffect(() => {
    console.log(game);
  }, [game]);

  if (!game) {
    return <Spinner />;
  }

  return (
    <section className="container details-container">
      <img
        src={game?.image}
        alt=""
      />
      <div className="details-content">
        <h1>{game?.title}</h1>
        <p>{game?.description}</p>
        <div className="details-pricetags">
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
        <button className="cta cta-primary cta-primary--details">Add to cart</button>
      </div>
    </section>
  );
}

export default Details;

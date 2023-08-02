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

  if (!game) {
    return <Spinner />;
  }

  const addToCart = () => {
    // Check if local storage is available in the browser
    if (typeof window !== "undefined" && window.localStorage) {
      // Retrieve existing cart items from local storage
      const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Add the current game to the cart items
      const updatedCartItems = [...existingCartItems, game];

      // Store the updated cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      window.location.reload();
    }
  };

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
        <button
          onClick={addToCart}
          className="cta cta-primary cta-primary--details">
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default Details;

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

  return <div>{game.title}</div>;
}

export default Details;

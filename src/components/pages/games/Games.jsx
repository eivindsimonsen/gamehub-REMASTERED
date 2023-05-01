// hooks
import { useState } from "react";
// images
import product1 from "../../../assets/GameHub_covers.jpg";
import product2 from "../../../assets/GameHub_covers2.jpg";
import product3 from "../../../assets/GameHub_covers3.jpg";
import product4 from "../../../assets/GameHub_covers4.jpg";
import product5 from "../../../assets/GameHub_covers5.jpg";
import product6 from "../../../assets/GameHub_covers6.jpg";
import product7 from "../../../assets/GameHub_covers7.jpg";
import product8 from "../../../assets/GameHub_covers8.jpg";
import product9 from "../../../assets/GameHub_covers9.jpg";
import product10 from "../../../assets/GameHub_covers10.jpg";

function Games() {
  const [images] = useState([product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]);
  const [active, setActive] = useState(0);

  return (
    <section className="games container--big">
      <aside className="games-filter">
        <ul>
          <li
            onClick={() => setActive(0)}
            className={active === 0 ? "active" : ""}>
            All games
          </li>
          <li
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : ""}>
            Pre-order
          </li>
          <li
            onClick={() => setActive(2)}
            className={active === 2 ? "active" : ""}>
            Sales
          </li>
        </ul>
      </aside>
      <div className="games-container">
        {images.map((image, index) => (
          <div
            className="games-container-content"
            key={index}>
            <img
              src={image}
              alt=""
            />
            <div className="games-container-content-hidden">
              <p>Forge legend</p>
              <s>5600</s> <p>3000 credits</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;

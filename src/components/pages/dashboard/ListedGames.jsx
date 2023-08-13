// images
import image1 from "../../../assets/GameHub_covers.jpg";
import image2 from "../../../assets/GameHub_covers2.jpg";
import image3 from "../../../assets/GameHub_covers3.jpg";
import image4 from "../../../assets/GameHub_covers4.jpg";

function ListedGames() {
  return (
    <>
      <section id="listed-games">
        <h1>Your listed games</h1>
        <section className="listed-games-content container">
          <figure>
            <img
              src={image1}
              alt="Image 1"
            />
            <div>
              <figcaption>Ping Pong</figcaption>
              <p>3000 kr</p>
            </div>
          </figure>
          <figure>
            <img
              src={image2}
              alt="Image 2"
            />
            <div>
              <figcaption>Super duper</figcaption>
              <p>3000 kr</p>
            </div>
          </figure>
          <figure>
            <img
              src={image3}
              alt="Image 3"
            />
            <div>
              <figcaption>Black</figcaption>
              <p>3000 kr</p>
            </div>
          </figure>
          <figure>
            <img
              src={image4}
              alt="Image 4"
            />
            <div>
              <figcaption>Furious</figcaption>
              <p>3000 kr</p>
            </div>
          </figure>
        </section>
      </section>
    </>
  );
}

export default ListedGames;

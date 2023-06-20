// hooks
import { useState } from "react";
// components
import PopularCard from "./PopularCard";
import SalesCard from "./SalesCard";
import Reviews from "./Reviews";
// images
import image from "../../../assets/igor-karimov-9AmKnNZw3GA-unsplash.jpg";
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
import PostReview from "./PostReview";

function Home() {
  const [images] = useState([product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]);

  return (
    <>
      <section className="home-intro">
        <img
          className="header-image"
          src={image}
          alt=""
        />
        <div className="home-intro-header">
          <div className="slider">
            <div className="slide-track">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="slide">
                  <img
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <h1>
            <span className="sp1">The</span>
            <span className="sp2"> Universe</span>
            <span className="sp1"> of</span>
            <span className="sp2"> Games</span>
          </h1>
        </div>
      </section>
      <section className="popular container">
        <h2>Popular Games</h2>
        <hr />
        <div className="card-container">
          <PopularCard />
        </div>
      </section>
      <section className="deals container">
        <h2>Limited Deals</h2>
        <hr />
        <div className="card-container">
          <SalesCard />
        </div>
      </section>
      <section className="reviews container">
        <h2>Site Reviews</h2>
        <hr />
        <div className="reviews-container">
          <Reviews />
          <Reviews />
          <PostReview />
        </div>
      </section>
    </>
  );
}

export default Home;

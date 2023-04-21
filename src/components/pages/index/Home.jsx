import React from "react";
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

function Home() {
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
              <div className="slide">
                <img
                  src={product1}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product2}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product3}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product4}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product5}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product6}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product7}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product8}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product9}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={product10}
                  alt=""
                />
              </div>
            </div>
          </div>
          <h1>
            <span className="sp1">The</span>
            <span className="sp2"> Universe</span>
            <span className="sp3"> of</span>
            <span className="sp4"> Games</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Home;

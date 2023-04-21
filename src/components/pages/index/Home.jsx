// hooks
import { useState } from "react";
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

function Home() {
  const [images] = useState([product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]);
  console.log(images);

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
            <span className="sp3"> of</span>
            <span className="sp4"> Games</span>
          </h1>
        </div>
      </section>
      <section className="popular container">
        <h2>Popular games</h2>
        <hr />
        <div className="popular-card-container">
          <div className="popular-card">
            <img
              src={product1}
              alt=""
            />
            <div>
              <h3>Ping pong</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est. Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
              <button className="cta cta-primary">Read more</button>
            </div>
          </div>
          <div className="popular-card">
            <img
              src={product2}
              alt=""
            />
            <div>
              <h3>Super duper</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
              <button className="cta cta-primary">Read more</button>
            </div>
          </div>
          <div className="popular-card">
            <img
              src={product3}
              alt=""
            />
            <div>
              <h3>Black</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
              <button className="cta cta-primary">Read more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="deals"></section>
      <section className="reviews"></section>
    </>
  );
}

export default Home;

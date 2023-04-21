import product1 from "../../../assets/GameHub_covers.jpg";
import product2 from "../../../assets/GameHub_covers2.jpg";
import product3 from "../../../assets/GameHub_covers3.jpg";

function PopularCard() {
  return (
    <>
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
    </>
  );
}

export default PopularCard;

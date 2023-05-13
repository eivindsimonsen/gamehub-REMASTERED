import product1 from "../../../assets/GameHub_covers.jpg";
import product2 from "../../../assets/GameHub_covers2.jpg";
import product3 from "../../../assets/GameHub_covers3.jpg";

function SellCard() {
  return (
    <>
      <div className="card sell-card">
        <img
          src={product1}
          alt=""
        />
        <div>
          <div className="card-title-price">
            <h3>Ping Pong</h3>
            <strong>
              <span>1500 credits</span>
            </strong>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est. Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
          <button className="cta cta-primary">List for sale</button>
        </div>
      </div>
      <div className="card sell-card">
        <img
          src={product2}
          alt=""
        />
        <div>
          <div className="card-title-price">
            <h3>Super duper</h3>
            <strong>
              <span>1500 credits</span>
            </strong>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
          <button className="cta cta-primary">List for sale</button>
        </div>
      </div>
      <div className="card sell-card">
        <img
          src={product3}
          alt=""
        />
        <div>
          <div className="card-title-price">
            <h3>Black</h3>
            <strong>
              <span>1500 credits</span>
            </strong>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur dolorem nemo eius saepe debitis, at nihil repudiandae, suscipit animi sunt? Cum dolores soluta provident ex, nisi temporibus id voluptate numquam perspiciatis, explicabo illo exercitationem architecto fuga, eum aliquid est.</p>
          <button className="cta cta-primary">List for sale</button>
        </div>
      </div>
    </>
  );
}

export default SellCard;

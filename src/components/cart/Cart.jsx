// hooks
import { useState } from "react";
// images
import image from "../../assets/GameHub_covers.jpg";

function Cart() {
  const [openCart, setOpenCart] = useState(false);

  const showCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <i
        onClick={showCart}
        className="fa-solid fa-cart-shopping"></i>
      {openCart && (
        <>
          <div
            onClick={showCart}
            className="black-overlay"></div>
          <section id="cart">
            <div className="cart-item">
              <img
                src={image}
                alt=""
              />
              <div className="cart-item-texts">
                <i className="fa-regular fa-trash-can"></i>
                <p>Ping pong championship</p>
                <p>9000 credits</p>
              </div>
            </div>
            <div className="cart-item">
              <img
                src={image}
                alt=""
              />
              <div className="cart-item-texts">
                <i className="fa-regular fa-trash-can"></i>
                <p>Ping pong championship</p>
                <p>9000 credits</p>
              </div>
            </div>
            <p>Total: 9000 credits</p>
            <button className="cta cta-alt">Checkout</button>
          </section>
        </>
      )}
    </>
  );
}

export default Cart;

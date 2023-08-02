// hooks
import { useState } from "react";

function Cart(props) {
  const [openCart, setOpenCart] = useState(false);
  const { cartItemCount, totalCredits, cartItemsWithQuantity } = props;

  const showCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      {
        <i
          onClick={showCart}
          className="fa-solid fa-cart-shopping">
          {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
        </i>
      }
      {openCart && (
        <>
          <div
            onClick={showCart}
            className="black-overlay"></div>
          <section id="cart">
            {cartItemsWithQuantity.map((item, index) => (
              <div
                key={index}
                className="cart-item">
                <img
                  src={item.image}
                  alt=""
                />
                <div className="cart-item-texts">
                  <i className="fa-regular fa-trash-can"></i>
                  <p>{`${item.title} x${item.quantity}`}</p>
                  <p className="cart-item-discount">
                    {item.sale ? (
                      <>
                        <s>{item.price}</s> <p>{item.price - item.discount} credits</p>
                      </>
                    ) : (
                      <>
                        <p>{item.price} credits</p>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
            <p className="cart-item-total">Total: {totalCredits} credits</p>
            <button className="cta cta-alt">Checkout</button>
          </section>
        </>
      )}
    </>
  );
}

export default Cart;

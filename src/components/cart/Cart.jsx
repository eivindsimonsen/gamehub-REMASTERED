// hooks
import { useState } from "react";

function Cart(props) {
  const [openCart, setOpenCart] = useState(false);
  const { cartItemCount, totalCredits, cartItemsWithQuantity } = props;

  const showCart = () => {
    setOpenCart(!openCart);
  };

  // Function to remove an item from the cart and localStorage
  const removeItemFromCart = (index) => {
    // Create a copy of the cartItemsWithQuantity array.
    const updatedCartItems = [...cartItemsWithQuantity];
    // Remove the item at the specified index.
    updatedCartItems.splice(index, 1);
    // Update the state and local storage.

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    window.location.reload();
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
                  <i
                    className="fa-regular fa-trash-can"
                    onClick={() => removeItemFromCart(index)}></i>
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

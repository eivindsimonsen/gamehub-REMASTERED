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

  // STRIPE PAYMENT CODE
  // console.log(typeof cartItemsWithQuantity);

  const items = [];
  for (const key in cartItemsWithQuantity) {
    if (cartItemsWithQuantity.hasOwnProperty(key)) {
      const item = cartItemsWithQuantity[key];
      items.push({ id: item.stripeID, quantity: item.quantity });
    }
  }

  // console.log(typeof items);

  const fetchStripe = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
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
          <form
            id="cart"
            action="/create-checkout-session"
            method="POST">
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
            <button
              className="cta cta-alt"
              onClick={fetchStripe}>
              Checkout
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Cart;

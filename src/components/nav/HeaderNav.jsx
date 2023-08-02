// hooks
import { useState, useEffect } from "react";
// packages
import { NavLink, Link, useNavigate } from "react-router-dom";
// images
import logoImage from "../../assets/GameHub_Logo.png";
// components
import Cart from "../cart/Cart";
// context
import { UserAuth } from "../../context/AuthContext";

function HeaderNav() {
  // State to keep track of cart items count for the cart icon
  const [cartItemCount, setCartItemCount] = useState(0);
  const { user, logout } = UserAuth() || {};

  // states
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setShow(!show);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You've logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Function to count the quantity of each unique item
  const countItemQuantity = (items) => {
    const itemMap = {};
    items.forEach((item) => {
      if (itemMap[item.id]) {
        itemMap[item.id].quantity++;
      } else {
        itemMap[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(itemMap);
  };

  // Get the cart items with quantity indicators
  const cartItemsWithQuantity = countItemQuantity(cartItems);

  // Calculate the total with quantity and discounts considered
  const totalCredits = cartItemsWithQuantity.reduce((total, item) => total + (item.sale ? item.price - item.discount : item.price) * item.quantity, 0);

  // Update the cart items count whenever the cart items change
  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  return (
    <>
      <nav className="header-nav">
        <Link
          to="/"
          className="brand-logo">
          <img
            src={logoImage}
            alt="Gamehub logo"
          />
        </Link>
        <ul className="desktop-nav">
          <div role="list">
            <li role="listitem">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li role="listitem">
              <NavLink to="/sell">Sell game</NavLink>
            </li>
          </div>
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
            />
          </div>
          <li className="cart-container">
            <Cart
              cartItemCount={cartItemCount}
              totalCredits={totalCredits}
              cartItemsWithQuantity={cartItemsWithQuantity}
            />
          </li>
          <li>
            {user ? (
              <button
                className="cta-red"
                onClick={handleLogout}>
                Logout
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            ) : (
              <NavLink to="/login">Log in</NavLink>
            )}
          </li>
          <li className="profile-image">
            {user && (
              <NavLink to="/dashboard">
                <img
                  src={user.photoURL}
                  alt="Profile id"
                />
              </NavLink>
            )}
          </li>
        </ul>
        <ul className="mobile-nav">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
            />
          </div>
          <li className="cart-container">
            <Cart />
          </li>
          <i
            onClick={showMenu}
            className="fa-solid fa-bars"></i>
          {show && (
            <>
              <div className="collapse-nav">
                <i
                  onClick={showMenu}
                  className="fa-solid fa-x"></i>
                <div className="collapse-nav-actions">
                  <div>
                    <li>
                      <NavLink
                        onClick={showMenu}
                        to="/games">
                        Games
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={showMenu}
                        to="/sell">
                        Sell game
                      </NavLink>
                    </li>
                    <li>
                      {!user && (
                        <NavLink
                          onClick={showMenu}
                          className="logout"
                          to="/login">
                          Login
                        </NavLink>
                      )}
                    </li>
                  </div>
                  <div className="collapse-nav-user">
                    {user && (
                      <>
                        <li className="profile-image">
                          <NavLink
                            onClick={showMenu}
                            to="/dashboard">
                            {!user.photoUrl ? (
                              <img
                                src="https://loremflickr.com/640/640"
                                alt="Profile id"
                              />
                            ) : (
                              <img
                                src={user.photoUrl}
                                alt="Profile id"
                              />
                            )}
                          </NavLink>
                        </li>
                        <button onClick={handleLogout}>
                          Logout
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;

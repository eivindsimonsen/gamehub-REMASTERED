import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [createUser, setCreateUser] = useState(false);

  const toggleForm = () => {
    setCreateUser(!createUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <>
      <NavLink
        to="/"
        className="return-btn">
        <i className="fa-solid fa-arrow-left"></i>
        <div>Return</div>
      </NavLink>
      <section id="login">
        <h1 className="left-side">Login with Google, or create a new account</h1>
        <div className="login-form-container">
          {createUser ? (
            <form className="right-side login-form">
              <input
                type="text"
                placeholder="Username"
              />
              <input
                type="text"
                placeholder="Username/email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="cta cta-primary">
                Create user
              </button>
            </form>
          ) : (
            <form className="right-side login-form">
              <input
                type="text"
                placeholder="Username/email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="cta cta-primary">
                Login
              </button>
            </form>
          )}
          {createUser ? (
            <button
              type="button"
              onClick={toggleForm}
              className="cta cta-alt">
              Oh, wait I have a user
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleForm}
              className="cta cta-alt">
              Create a user
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Login;

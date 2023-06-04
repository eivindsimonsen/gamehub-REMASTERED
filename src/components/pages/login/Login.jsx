import { useState } from "react";
import { NavLink } from "react-router-dom";
import CreateUser from "./CreateUser";
import SignIn from "./SignIn";

function Login() {
  const [createUser, setCreateUser] = useState(false);

  const toggleForm = () => {
    setCreateUser(!createUser);
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
          {createUser ? <CreateUser /> : <SignIn />}
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

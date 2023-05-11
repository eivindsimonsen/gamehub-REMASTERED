import { NavLink } from "react-router-dom";

function Login() {
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
        <form className="right-side login-form">
          <input
            type="text"
            placeholder="Username/email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button className="cta cta-primary">Login</button>
          <button className="cta cta-alt">Create a user</button>
        </form>
      </section>
    </>
  );
}

export default Login;

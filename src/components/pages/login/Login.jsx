function Login() {
  return (
    <section id="login">
      <div className="left-side">Login or create a user</div>
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
  );
}

export default Login;

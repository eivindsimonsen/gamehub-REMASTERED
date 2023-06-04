import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form className="right-side login-form">
        <input
          type="text"
          placeholder="Username/email"
          value={username || email}
        />
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            /* value={password} */
          />
          <i
            onClick={toggleEye}
            className={"fa-solid " + (showPassword ? "fa-eye" : "fa-eye-slash")}></i>
        </label>
        <button
          type="submit"
          className="cta cta-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default SignIn;
